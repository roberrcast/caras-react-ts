import React from "react";
import {
  HeaderWrapper,
  LogoWrapper,
  LogoLink,
  Logo,
  Menu,
  Nav,
  SocialMedia,
  IconLink,
  IconWrapper,
} from "./styles";
import { Facebook, Instagram, Twitter, Search } from "react-feather";

interface HeaderProps {
  logoSrc: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  const navLinks = [
    "Entretenimiento",
    "Realeza",
    "Moda",
    "Lifestyle",
    "Personalidades",
    "Arte y Cultura",
    "Sports",
    "Revista",
  ];

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoLink href="#">
          <Logo src={logoSrc} alt="Logo de la Revista Caras" />
        </LogoLink>
      </LogoWrapper>

      <Menu>
        <Nav>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              aria-label={`${link}. Ir a esta sección.`}
            >
              {link}
            </a>
          ))}
        </Nav>

        <SocialMedia>
          <IconLink
            href="https://www.facebook.com/Revista.Caras"
            target="_blank"
            aria-label="Ir a la página oficial de Caras en Facebook"
          >
            <Facebook size={20} aria-hidden="true" />
          </IconLink>
          <IconLink
            href="https://www.instagram.com/carasmexico/"
            target="_blank"
            aria-label="Ir a la página oficial de Caras en Instagram"
          >
            <Instagram size={20} aria-hidden="true" />
          </IconLink>
          <IconLink
            href="https://x.com/carasmexico"
            target="_blank"
            aria-label="Ir a la página oficial de Caras en Twitter"
          >
            <Twitter size={20} aria-hidden="true" />
          </IconLink>
          <IconWrapper arial-label="Buscar">
            <Search size={20} />
          </IconWrapper>
        </SocialMedia>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
