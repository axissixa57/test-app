import React from 'react'
import express from 'express'
import { StaticRouter, matchPath } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import serialize from 'serialize-javascript'

import store from '@/server/store'
import routes from '@/routes'
import App from '../App'

// '/home/user/Downloads/Projects/razzle-ssr-app/build/assets.json'
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()

server.disable('x-powered-by')

// '/home/user/Downloads/Projects/razzle-ssr-app/public'
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR))

server.get('/*', async (req, res) => {
  const activeRoute = routes.find(route => matchPath(req.path, route)) || {}

  activeRoute.fetchInitialData
    ? await activeRoute.fetchInitialData(store, req.url)
    : await Promise.resolve()

  const context = {}

  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </Provider>,
  )

  res.status(200).send(
    `<!doctype html>
          <html lang="">
          <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charset="utf-8" />
              <title>Welcome to Razzle</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              ${
                assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ''
              }
              ${
                process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`
              }
          </head>
          <body>
              <div id="root">${markup}</div>
              <script>window.__INITIAL_DATA__ = ${serialize(
                store.getState(),
              )}</script>
          </body>
        </html>`,
  )
})

export default server
