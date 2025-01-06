import { About } from '@/components/About';
import * as S from './styles'
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { OpenSource } from '@/components/OpenSource';

export default function Home() {
  return (
    <S.Main>
      <About />
      <S.SectionTitle>I am skilled at</S.SectionTitle>
      <Skills />
      <S.SectionTitle>Education</S.SectionTitle>
      <Education />
      <S.SectionTitle>Working experience</S.SectionTitle>
      <Experience />
      <S.SectionTitle>Open Source Projects</S.SectionTitle>
      <OpenSource/>
    </S.Main>
  );
}
