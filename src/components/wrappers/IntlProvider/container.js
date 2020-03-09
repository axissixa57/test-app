import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'

const messages = {
  en: {
    productType: 'Product type',
    polos: 'Polos',
    pants: 'Pants',
    shirts: 'Shirts',
    jackets: 'Jackets',
    dresses: 'Dresses',
    cardigans: 'Cardigans',
    tops: 'Tops',
    'trench coats': 'Trench Coats',
    productSize: 'Product size',
    productColor: 'Product color',
    blue: 'blue',
    green: 'green',
    yellow: 'yellow',
    orange: 'orange',
    pink: 'pink',
    red: 'red',
    brown: 'brown',
    purple: 'purple',
    black: 'black',
    grey: 'grey',
    white: 'white',
    productCost: 'Product cost',
  },
  ru: {
    productType: 'Вид продукции',
    polos: 'Поло',
    pants: 'Штаны',
    shirts: 'Рубашки',
    jackets: 'Пиджаки',
    dresses: 'Платья',
    cardigans: 'Кардиганы',
    tops: 'Блузки',
    'trench coats': 'Пальто',
    productSize: 'Размер продукции',
    productColor: 'Цвет продукции',
    blue: 'синий',
    green: 'зелёный',
    yellow: 'жёлтый',
    orange: 'оранжевый',
    pink: 'розовый',
    red: 'красный',
    brown: 'коричневый',
    purple: 'фиолетовый',
    black: 'чёрный',
    grey: 'серый',
    white: 'белый',
    productCost: 'Стоимость продукции',
  },
}

const IntlProviderWrapper = ({ locale, children }) => {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  )
}

IntlProviderWrapper.propTypes = {
  locale: PropTypes.string,
  children: PropTypes.object,
}

export default connect(
  ({ internationalization }) => ({
    locale: internationalization.locale,
  }),
  null,
)(IntlProviderWrapper)
