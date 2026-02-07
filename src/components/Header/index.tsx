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
                        <a key={link} href={`#${link.toLowerCase()}`}>
                            {link}
                        </a>
                    ))}
                </Nav>

                <SocialMedia>
                    <IconLink
                        href="https://www.facebook.com/Revista.Caras"
                        target="_blank"
                        aria-label="Facebook"
                    >
                        <Facebook size={20} />
                    </IconLink>
                    <IconLink
                        href="https://www.instagram.com/carasmexico/"
                        target="_blank"
                        aria-label="Instagram"
                    >
                        <Instagram size={20} />
                    </IconLink>
                    <IconLink
                        href="https://x.com/carasmexico"
                        target="_blank"
                        aria-label="Twitter"
                    >
                        <Twitter size={20} />
                    </IconLink>
                    <IconWrapper>
                        <Search size={20} />
                    </IconWrapper>
                </SocialMedia>
            </Menu>
        </HeaderWrapper>
    );
};

export default Header;
