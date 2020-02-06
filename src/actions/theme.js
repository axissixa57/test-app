import { THEME } from '@/constants'
import { dark } from '@/theme/globalStyle'

const actions = {
  darkMode: () => ({
    type: THEME.DARK_MODE,
  }),
}

export default actions
