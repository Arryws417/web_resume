import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main>
        Selamat Datang Di
        Website Portfolio Saya !
      </SectionTitle>
      <SectionText>
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;