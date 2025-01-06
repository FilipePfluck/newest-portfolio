import { styled } from "@/styled-system/jsx";

export const JobHeader = styled('div', {
  base: {
    display: 'flex',
    gap: '16px'
  }
})

export const CompanyPicture = styled('img', {
  base: {
    w: '64px',
    h: '64px',
    rounded: '16px'
  }
})

export const CompanyName = styled('h3', {
  base: {
    fontSize: '32px',
    fontWeight: 'semibold',
    lineHeight: '100%',
    color: 'slate.6'
  }
})

export const JobDuration = styled('strong', {
  base: {
    fontSize: '14px',
    color: 'green.2'
  }
})

export const JobDescription = styled('p', {
  base: {
    fontSize: '16px',
    lineHeight: '120%',
    color: 'slate.5',
    maxW: { base: '300px', md: '685px'}
  }
})

export const EventsContainer = styled('div', {
  base: {
    display: 'flex',
    gap: '24px',
    maxW: { base: '300px', md: '685px'},
    flexDir: { base: 'column', md: 'row'}
  }
})

export const EventCard = styled('div', {
  base: {
    display: 'flex',
    flexDir: 'column',
    rounded: '16px',
    p: '24px',
    gap: '24px',

    bg: 'radial-gradient(circle, rgba(34, 34, 37, 1) 0%, rgba(29, 29, 32, 0.3) 100%);',
    border: '1px solid {colors.slate.4}',
  }
})

export const EventCompanyPicture = styled('img', {
  base: {
    w: '52px',
    h: '52px',
    rounded: '14px'
  }
})

export const EventName = styled('h4', {
  base: {
    fontSize: '24px',
    fontWeight: 'semibold',
    lineHeight: '100%',
    color: 'slate.6'
  }
})

export const EventCompanyName = styled('strong', {
  base: {
    fontSize: '14px',
    color: 'green.2'
  }
})