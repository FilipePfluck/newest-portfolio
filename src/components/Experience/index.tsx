import { Flex } from '@/styled-system/jsx'
import * as S from './styles'

export const Experience = () => {
  return (
    <Flex direction='column' gap='48px'>
      <Flex direction='column' gap='24px'>
        <S.JobHeader>
          <S.CompanyPicture src='/vobi.jpg'/>
          <Flex direction='column' gap='8px'>
            <S.CompanyName>Vobi</S.CompanyName>
            <S.JobDuration>Set. 2021 - Aug. 2022</S.JobDuration>
          </Flex>
        </S.JobHeader>
        <S.JobDescription>
          Vobi is a project management platform for small businesses 
          in the residential construction industry, 
          revolutionazing one of the less digitized industries in Brazil. 
          Vobi was selected for a batch on YCombinator on 2022. 
          It empowers designers and architects by providing them tools 
          to manage their business, control their finances and much more. 
          I worked as a fullstack developer for Vobi, 
          maintaining and adding new features 
          to the platform built with Node and React.
        </S.JobDescription>
      </Flex>

      <Flex direction='column' gap='24px'>
        <S.JobHeader>
          <S.CompanyPicture src='/dexper.jpeg'/>
          <Flex direction='column' gap='8px'>
            <S.CompanyName>Dexper</S.CompanyName>
            <S.JobDuration>Feb. 2023 - Jul. 2023</S.JobDuration>
          </Flex>
        </S.JobHeader>
        <S.JobDescription>
          Dexper is a company that builds platforms for enterprises 
          to host online events available across the world. 
          Once the live event has finished, the content is automatically available on-demand. 
          While at Dexper, I helped delivering online events 
          for enterprises to reach their global audience; 
          created generic, reusable, and fully customizable components 
          to be used on multiple projects for several clients, 
          using React, Chakra UI and Storybook; 
          Improved the web core vitals scores on several pages 
          across multiple projects, including performance and accessibility; 
          I've written tests for usability, functionality and accessibility 
          using jest, axe and react-testing-library;
        </S.JobDescription>

        <S.EventsContainer>
          <S.EventCard>
            <S.JobHeader>
              <S.EventCompanyPicture src='/figma.png'/>
              <Flex direction='column' gap='8px'>
                <S.EventName>Config 2023</S.EventName>
                <S.EventCompanyName>By Figma</S.EventCompanyName>
              </Flex>
            </S.JobHeader>
            <S.JobDescription>
              Config is the annual global conference hosted by Figma. 
              In  Config, the greatest news about design are presented to the world. 
              I helped Dexper deliver this event to more then 30k people.
            </S.JobDescription>
          </S.EventCard>

          <S.EventCard>
            <S.JobHeader>
              <S.EventCompanyPicture src='/chainlink.png'/>
              <Flex direction='column' gap='8px'>
                <S.EventName>Smartcon 2023</S.EventName>
                <S.EventCompanyName>By Chainlink</S.EventCompanyName>
              </Flex>
            </S.JobHeader>
            <S.JobDescription>
            Smartcon is an event hosted by Chainlink 
            to present the news about cryptocurrency and web3. 
            It happened in 2023 in Barcelona and I helped Dexper 
            delivering this event remotelly to the world.
            </S.JobDescription>
          </S.EventCard>
        </S.EventsContainer>
      </Flex>
    </Flex>
  )
}