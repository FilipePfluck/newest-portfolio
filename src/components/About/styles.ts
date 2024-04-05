import { styled } from "@/styled-system/jsx";

export const ProfilePic = styled('img', {
  base: {
    h: '240px',
    w: '240px',
    rounded: '32px',
  }
})

export const Name = styled('h1', {
  base: {
    fontSize: '96px',
    fontWeight: 'semibold',
    lineHeight: '100%',
    color: 'slate.6',
  }
})

export const JobDescription = styled('h2', {
  base: {
    fontSize: '48px',
    color: 'slate.5',
    lineHeight: '120%',
  }
})

export const Description = styled('p', {
  base: {
    fontSize: '24px',
    lineHeight: '120%',
    color: 'slate.5',
    maxW: '910px'
  }
})