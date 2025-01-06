import { styled } from "@/styled-system/jsx";

export const ProjectName = styled('h3', {
  base: {
    fontSize: '32px',
    fontWeight: 'semibold',
    lineHeight: '100%',
    color: 'slate.6'
  }
})

export const ProjectDescription = styled('p', {
  base: {
    fontSize: '16px',
    lineHeight: '120%',
    color: 'slate.5',
    maxW: { base: '300px', md: '685px'}
  }
})