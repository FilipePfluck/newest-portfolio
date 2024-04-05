import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

import { config } from '@/panda/index'

export default defineConfig({
  preflight: true,
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
  globalCss: defineGlobalStyles({
    '::-webkit-scrollbar': {
      width: '16px',
    },

    '::-webkit-scrollbar-track': {
      bg: 'slate.1',
    },

    '::-webkit-scrollbar-thumb': {
      bg: 'slate.3',
    }
  }),
  ...config,
})

