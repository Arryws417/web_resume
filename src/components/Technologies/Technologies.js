import React from 'react';
import { DiDocker, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="techno">
    <SectionDivider />
    <SectionTitle>Technology</SectionTitle>
    <SectionText>
      Hallo saya familiar dengan beberapa teknologi yang digunakan seperti 
    </SectionText>
    <List>
      <ListItem>
      <DiReact size={3}/>
      <ListContainer>
      <ListTitle>Front-End</ListTitle>
        <ListParagraph>
        Familiar Dengan <br />
        React.js, Vue.js
        </ListParagraph>
      </ListContainer>
      </ListItem>

      <ListItem>
      <DiFirebase size={3}/>
      <ListContainer>
      <ListTitle>Back-End</ListTitle>
        <ListParagraph>
        Familiar Dengan <br />
        Node.js, Flask, MySql
        </ListParagraph>
      </ListContainer>
      </ListItem>
      
      <ListItem>
      <DiDocker size={3} />
      <ListTitle>Open Source</ListTitle>
      <ListContainer>
      <ListParagraph>
        Familiar Dengan <br />
        Docker, Terraform
        </ListParagraph>
      </ListContainer>
      </ListItem>
    
      <ListItem>
      <ListTitle>Virtual</ListTitle>
      <ListContainer>
      <ListParagraph>
        Familiar Dengan <br />
        Vsphere, VBox
      </ListParagraph>
      </ListContainer>
      </ListItem>

      <ListItem>
      <ListTitle>Open Cloud & Network</ListTitle>
      <ListContainer>
      <ListParagraph>
        Familiar Dengan <br />
        GCP, MPLS, DWDM OADM, SDH Transmisi
      </ListParagraph>
      </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
