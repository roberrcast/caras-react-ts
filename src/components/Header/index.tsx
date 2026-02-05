import React from "react";
import { HeaderWrapper, Logo, Nav } from "./styles";

// Definimos el tipado
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
            <a href="/">
                <Logo src={logoSrc} alt="Logo de la Revista Caras" />
            </a>
            <Nav>
                {navLinks.map((link) => (
                    <a key={link} href={`#${link.toLowerCase()}`}>
                        {link}
                    </a>
                ))}
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;
