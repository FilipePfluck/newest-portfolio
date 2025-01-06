import { Flex } from '@/styled-system/jsx'
import * as S from './styles'

export const OpenSource = () => {
  return (
    <Flex direction='column' gap='4'>
      <S.ProjectName>Pluco UI</S.ProjectName>
      <S.ProjectDescription>
        Pluco UI is a collection of beautiful and accessible components created using React, Ark, Panda and Storybook. 
        It also includes tests for functionality and accessibility. It hasn't been released yet, but it is continuouslly receiving updates.
        You can check it in my Github
      </S.ProjectDescription>
    </Flex>
  )
}