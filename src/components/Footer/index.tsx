import React from "react";
import {
    FooterContainer,
    MenusLegal,
    LogoContainer,
    FooterLogoLink,
    Logo,
    Menu,
    Title,
    Nav,
    Link,
    DisclaimerSocial,
    Text,
    SocialMedia,
    LinkIcon,
    Icon,
} from "./styles";
import { footerMenus, socialLinks } from "../../data/footer";
import LogoImage from "../../assets/Logo-Caras.png";

const Footer = () => {
    return (
        <FooterContainer>
            <MenusLegal>
                <LogoContainer>
                    <FooterLogoLink>
                        <Logo
                            src={LogoImage}
                            alt="Logotipo de la revista Caras"
                        />
                    </FooterLogoLink>
                </LogoContainer>

                {footerMenus.map((menu, index) => (
                    <Menu key={index}>
                        <Title>{menu.title}</Title>
                        <Nav></Nav> {/* .map inside nav */}
                    </Menu>
                ))}
            </MenusLegal>
        </FooterContainer>
    );
};

export default Footer;
