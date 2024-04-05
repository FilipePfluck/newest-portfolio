import { Flex } from '@/styled-system/jsx'
import * as S from './styles'

export const Education = () => {
  return (
    <Flex direction='column' gap='48px'>
      <Flex direction='column' gap='24px'>
        <S.CourseHeader>
          <S.SchoolPicture src='/instituto.jpeg'/>
          <Flex direction='column' gap='8px'>
            <S.SchoolName>Instituto Ivoti</S.SchoolName>
            <S.CourseDuration>2019 - 2021</S.CourseDuration>
          </Flex>
        </S.CourseHeader>
        <S.CourseDescription>
          I graduated in highschool with a Techincal Degree in IT. 
          I learned the basics of some programming languages 
          such as C, Java and PHP. I also learned the basics of HTML, CSS and SQL. 
          Besides programming, I took classes on hardware, networks and graphic softwares
        </S.CourseDescription>
      </Flex>

      <Flex direction='column' gap='24px'>
        <S.CourseHeader>
          <S.SchoolPicture src='/rocketseat.jpg'/>
          <Flex direction='column' gap='8px'>
            <S.SchoolName>Rocketseat</S.SchoolName>
            <S.CourseDuration>2020 - currently</S.CourseDuration>
          </Flex>
        </S.CourseHeader>
        <S.CourseDescription>
          Rocketseat is one of the most popular online programming schools in Brazil. 
          They create tons of contents for free, and also sell specialization bootcamps. 
          In rocketseat I specialized in Node, React and React Native. 
          They also have a forum and a Discord community, where I'm an active member 
          and always willing to help other people.
        </S.CourseDescription>

        <S.BootcampsContainer>
          <S.BootcampCard>
            <S.Filter>
              <S.BootcampCertificate src='/gostack-certificate.png'/>
            </S.Filter>
            <S.CourseHeader>
              <S.BootcampCompanyPicture src='/gostack.png'/>
              <Flex direction='column' gap='8px'>
                <S.BootcampName>Gostack</S.BootcampName>
                <S.CourseDuration>2020</S.CourseDuration>
              </Flex>
            </S.CourseHeader>
            <S.CourseDescription>
              In the GoStack bootcamp I learned about Node, React and React Native. 
              I developed an application called GoBarber, aswell as other applications as challenges.
              <S.CertificateLink target='_blank' href='https://app.rocketseat.com.br/certificates/ee0dc31b-1eca-4d3c-b87f-6a3870953dfc'>
                Check the vality of the certificate
              </S.CertificateLink>
            </S.CourseDescription>
          </S.BootcampCard>

          <S.BootcampCard>
            <S.Filter>
              <S.BootcampCertificate src='/ignite-certificate.png'/>
            </S.Filter>
            <S.CourseHeader>
              <S.BootcampCompanyPicture src='/ignite.png'/>
              <Flex direction='column' gap='8px'>
                <S.BootcampName>Ignite</S.BootcampName>
                <S.CourseDuration>2021 - currently</S.CourseDuration>
              </Flex>
            </S.CourseHeader>
            <S.CourseDescription>
              Ignite is the newest bootcamp from Rocketseat. 
              I finished the old and new versions of the React Bootcamp. 
              In this bootcamp, I mastered React and Next, and learned about many other tools this ecosystem has to offer, like React Query and Tailwind.
              I am currently studying the Node bootcamp, where I am learning about 
              Node, Nest, Databases and crucial concepts for the backend.
              <S.CertificateLink target='_blank' href='https://app.rocketseat.com.br/certificates/1961ff47-047d-4431-bea5-49e9f624158b'>
                Check the vality of the certificate
              </S.CertificateLink>
            </S.CourseDescription>
          </S.BootcampCard>
        </S.BootcampsContainer>
      </Flex>

      <Flex direction='column' gap='24px'>
        <S.CourseHeader>
          <S.SchoolPicture src='/patoacademy.jpeg'/>
          <Flex direction='column' gap='8px'>
            <S.SchoolName>Pato Academy</S.SchoolName>
            <S.CourseDuration>2022 - currently</S.CourseDuration>
          </Flex>
        </S.CourseHeader>
        <S.CourseDescription>
          Pato Academy is a school that teaches cybersecurity in Brazil. 
          I joined because I want to learn as much as possible about IT 
          and because I want to make the applications I build more secure. 
          In Pato Academy I am learning about the most common vulnerabilities, 
          such as XSS, SQL Injection and SSRF
        </S.CourseDescription>
      </Flex>
    </Flex>
  )
}