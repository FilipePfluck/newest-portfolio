import { Flex } from '@/styled-system/jsx'
import * as S from './styles'
import { PiMonitorFill, PiDatabaseFill, PiFlaskFill } from 'react-icons/pi'

export const Skills = () => {
  return (
    <Flex gap='48px' w='1200px'> 
      <S.SkillCard direction='column'>
        <Flex gap='16px' align='center'>
          <PiMonitorFill size='32px' color='var(--colors-green-2)'/>
          <S.SkillTitle>Frontend</S.SkillTitle>
        </Flex>

        <S.SkillSubtitleContainer>
          <S.SkillSubtitle>User interface</S.SkillSubtitle>
          <S.SkillText>
            With my coding skills in React I can create highly maintainable composable components. 
            Paired with my understanding of design principles and my skills with css, 
            I give life to beautiful and well-animated user interfaces
          </S.SkillText>
        </S.SkillSubtitleContainer>

        <S.SkillSubtitleContainer>
          <S.SkillSubtitle>Performance</S.SkillSubtitle>
          <S.SkillText>
            I always strive to make the best code I can. 
            By following best practices, I minimize loading times, 
            improve web core vitals, and ensure a smooth user experience.
          </S.SkillText>
        </S.SkillSubtitleContainer>

        <S.SkillSubtitleContainer>
          <S.SkillSubtitle>Accessibility</S.SkillSubtitle>
          <S.SkillText>
          I believe the web should be inclusive for everyone. 
          By following industry standards I make sure my applications 
          are accessible for people with visual, motor or cognitive disabilities. 
          </S.SkillText>
        </S.SkillSubtitleContainer>
        
      </S.SkillCard>

      <Flex direction='column' gap='48px' w='55%'>
        <S.SkillCard direction='row'>
          <Flex gap='16px' align='center'>
            <PiDatabaseFill size='32px' color='var(--colors-green-2)'/>
            <S.SkillTitle>Backend</S.SkillTitle>
          </Flex>

          <Flex gap='24px'>
            <S.SkillSubtitleContainer>
              <S.SkillSubtitle>APIs</S.SkillSubtitle>
              <S.SkillText>
                I have experience in creating, documenting and maintaining restful APIs made with NodeJS. 
                I also have familiarity with Sockets, Graphql and Kafka
              </S.SkillText>
            </S.SkillSubtitleContainer>

            <S.SkillSubtitleContainer>
              <S.SkillSubtitle>Databases</S.SkillSubtitle>
              <S.SkillText>
              I have experience with relational databases like Postgres 
              and no sql databases like Firestore and Redis. 
              I’ve also used orms like Sequelize, Typeorm and Prisma
              </S.SkillText>
            </S.SkillSubtitleContainer>
          </Flex>
        </S.SkillCard>

        <S.SkillCard direction='row'>
          <Flex gap='16px' align='center'>
            <PiFlaskFill size='32px' color='var(--colors-green-2)'/>
            <S.SkillTitle>Testing</S.SkillTitle>
          </Flex>

          <Flex gap='24px'>
            <S.SkillSubtitleContainer>
              <S.SkillSubtitle>Unitary</S.SkillSubtitle>
              <S.SkillText>
                I write tests for my code to ensure it keeps functioning. 
                I am familiar with major testing tools such as Jest, Vite, React Testing Library and Storybook.
              </S.SkillText>
            </S.SkillSubtitleContainer>

            <S.SkillSubtitleContainer>
              <S.SkillSubtitle>End to end</S.SkillSubtitle>
              <S.SkillText>
              I can also write end to end tests to ensure a flow works as intended, 
              simulating a user interacting with the page, using Cypress or Playwright.
              </S.SkillText>
            </S.SkillSubtitleContainer>
          </Flex>
        </S.SkillCard>
      </Flex>
    </Flex>
  )
}