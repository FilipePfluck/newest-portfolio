import { styled } from "@/styled-system/jsx";

export const CourseHeader = styled('div', {
  base: {
    display: 'flex',
    gap: '16px'
  }
})

export const SchoolPicture = styled('img', {
  base: {
    w: '64px',
    h: '64px',
    rounded: '16px'
  }
})

export const SchoolName = styled('h3', {
  base: {
    fontSize: '32px',
    fontWeight: 'semibold',
    lineHeight: '100%',
    color: 'slate.6'
  }
})

export const CourseDuration = styled('strong', {
  base: {
    fontSize: '14px',
    color: 'green.2'
  }
})

export const CourseDescription = styled('p', {
  base: {
    fontSize: '16px',
    lineHeight: '120%',
    color: 'slate.5',
    maxW: { base: '300px', md: '685px'}
  }
})

export const BootcampsContainer = styled('div', {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '24px',
    maxW: { base: '300px', md: '685px'},
  }
})

export const BootcampCard = styled('div', {
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

export const BootcampCompanyPicture = styled('img', {
  base: {
    w: '52px',
    h: '52px',
    rounded: '14px'
  }
})

export const BootcampName = styled('h4', {
  base: {
    fontSize: '24px',
    fontWeight: 'semibold',
    lineHeight: '100%',
    color: 'slate.6'
  }
})

export const Filter = styled('div', {
  base: {
    position: 'relative',
    _after: {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      rounded: '24px',
      pointerEvents: 'none',
      bg: 'radial-gradient(circle, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.5) 100%)'
    }
  }
})

export const BootcampCertificate = styled('img', {
  base: {
    w: 'full',
    rounded: '24px',
    position: 'relative',
  }
})

export const CertificateLink = styled('a', {
  base: {
    color: 'green.2',
    textDecoration: 'none',
    ml: '1',
    cursor: 'pointer'
  }
})