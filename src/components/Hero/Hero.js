import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome<br/>
        Glad you vist my Website<br/>
        I'm happy for it.
      </SectionTitle>
      <SectionText>
        My name is Ayyas Mumtaz Yudha I'm a Software Engineer, Fullstack Web3 Developer and CEO of Hummingbird Corp.<br/>
        actually I'm just a CS student :)<br/>
        <br/>
        If you want to know more about me plese click the button bellow 
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/ayyas-yudha-bb6180235'}>Let's Colaborate</Button>
    </LeftSection>
  </Section>
);

export default Hero;