import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, span } from './HeaderStyles';

const Header = () =>  (
    <Container>
      <Div1>
        <Link href="/">
        <a style={{display: "flex", alignitems:"center", color:"cyan", marginBottom:"20px"}}>
          <DiCssdeck size="3rem" /> <span>Portfolio Website</span>
        </a>
        </Link>  
      </Div1>
      <Div2>
      <li>
        <Link href="#projects">
          <NavLink style={{display: "flex", alignitems:"center", color:"cyan"}}>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#techno">
        <NavLink style={{display: "flex", alignitems:"center", color:"cyan"}}>Techology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink style={{display: "flex", alignitems:"center", color:"cyan"}}>About</NavLink>
        </Link>
      </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Arryws417">
          <AiFillGithub size= "4rem"></AiFillGithub>
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="4rem"></AiFillLinkedin>
        </SocialIcons>
        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size="4rem"></AiFillInstagram>
        </SocialIcons>
        <SocialIcons href="https://facebook.com">
          <AiFillFacebook size="4 rem"></AiFillFacebook>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
