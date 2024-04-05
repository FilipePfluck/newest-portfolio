import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { Flex } from '@/styled-system/jsx'
import * as S from './styles'

export const About = () => {
  return (
    <Flex direction='column' gap='48px' align='center' >
      <Flex gap='64px' align='center'>
        <S.ProfilePic 
          src='https://avatars.githubusercontent.com/u/62773200?v=4'
        />
        <Flex direction='column' gap='16px'>
          <S.Name>Filipe Pfluck</S.Name>
          <S.JobDescription>Frontend software engineer</S.JobDescription>
          <Flex gap='16px'>
            <a target='_blank' href="https://github.com/FilipePfluck">
              <FaGithub size='36px'/>
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/filipe-hebestreit-pfluck-9389a31a6/">
              <FaLinkedin size='36px'/>
            </a>
          </Flex>
        </Flex>
      </Flex>
      
      <S.Description>
      I am a young and talented software developer living in Brazil. 
      I'm passionate about using my coding skills to craft amazing experiences. 
      Currently I work mostly with Typescript and React, 
      but I'm very curious and always eager to learn new things. 
      I consider myself a very logical and fast learning person.
      </S.Description>
    </Flex>
  )
}