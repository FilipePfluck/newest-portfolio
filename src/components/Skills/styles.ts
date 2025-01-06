import { styled } from "@/styled-system/jsx";

export const SkillCard = styled('div', {
  base: {
    display: 'flex',
    rounded: '16px',
    p: {base: '16px', md: '48px'},
    gap: '24px',

    bg: 'radial-gradient(circle, rgba(29, 29, 32, 1) 0%, rgba(29, 29, 32, 0.3) 100%);',
    border: '1px solid {colors.slate.4}',
  },
  variants: {
    direction: {
      column: {
        flexDir: 'column',
        w: {
          base: 'calc(60% - 48px)',
          md: 'calc(100%)',
          lg: 'calc(45% - 48px)'
        } 
      },
      row: {
        flexDir: 'column',
        w: {
          base: 'calc(80% - 48px)',
          md: 'calc(100%)',
        } 
      }
    }
  }
})

export const SkillTitle = styled('h4', {
  base: {
    fontSize: '32px',
    fontWeight: 'semibold',
    lineHeight: '120%',
    color: 'slate.6'
  }
})

export const SkillSubtitleContainer = styled('div', {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '8px'
  }
})

export const SkillSubtitle = styled('h5', {
  base: {
    fontSize: '18px',
    fontWeight: 'medium',
    lineHeight: '120%',
    color: 'slate.6'
  }
})

export const SkillText = styled('p', {
  base: {
    fontSize: '16px',
    color: 'slate.5',
  }
})
