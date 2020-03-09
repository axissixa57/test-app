import { INTERNATIONALIZATION } from '@/constants'

const actions = {
  changeLanguage: lang => ({
    type: INTERNATIONALIZATION.SWITCH_LANG,
    payload: lang,
  }),
}

export default actions
