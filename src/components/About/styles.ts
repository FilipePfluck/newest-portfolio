import { styled } from "@/styled-system/jsx";

export const ProfilePic = styled('img', {
  base: {
    h: '120px',
    w: '120px',
    rounded: '16px',

    lg: {
      h: '240px',
      w: '240px',
      rounded: '32px',
    },
  }
})

export const Name = styled('h1', {
  base: {
    fontSize: '24px',
    fontWeight: 'semibold',
    lineHeight: '100%',
    color: 'slate.6',

    md: {
      fontSize: '48px'
    },

    lg: {
      fontSize: '96px'
    }
  }
})

export const JobDescription = styled('h2', {
  base: {
    fontSize: '18px',
    color: 'slate.5',
    lineHeight: '120%',

    md: {
      fontSize: '24px'
    },

    lg: {
      fontSize: '48px'
    }
  }
})

export const Description = styled('p', {
  base: {
    fontSize: '16px',
    lineHeight: '120%',
    color: 'slate.5',
    maxW: '300px',

    md: {
      fontSize: '16px',
      maxW: '600px'
    },

    lg: {
      fontSize: '24px',
      maxW: '910px'
    }
  }
})