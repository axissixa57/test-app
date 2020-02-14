import React from 'react'
import { Result, Button } from 'antd'
import PropTypes from 'prop-types'

import { StyledNotMatched } from './styles'

const NotMatch = ({ history }) => (
  <StyledNotMatched>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          Back Home
        </Button>
      }
    />
  </StyledNotMatched>
)

NotMatch.propTypes = {
  history: PropTypes.array.isRequired,
}

export default NotMatch
