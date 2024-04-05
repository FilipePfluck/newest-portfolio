import { Config } from '@pandacss/dev'

import { tokens } from './tokens'

export const config: Config = {

  theme: {
    extend: {
      tokens,
    },
  },
}
