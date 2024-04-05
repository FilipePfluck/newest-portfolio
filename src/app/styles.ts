import { styled } from '@/styled-system/jsx'

export const Main = styled('main', {
  base: {
    bg: 'slate.1',
    color: 'slate.6',
    minH: '100vh',
    py: '40',
    display: 'flex',
    flexDir: 'column',
    gap: '72px',
    alignItems: 'center'
  }
})

export const SectionTitle = styled('h2', {
  base: {
    fontSize: '36px',
    fontWeight: 'semibold',
    lineHeight: '100%',
    color: 'slate.6',
    pb: '8px',
    borderBottom: '2px solid {colors.green.1}'
  }
})