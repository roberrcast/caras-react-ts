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

// Iconos
import { Facebook, Instagram, Twitter } from "react-feather";

const Footer = () => {
    const icons = {
        facebook: Facebook,
        instagram: Instagram,
        twitter: Twitter,
    };

    return (
        <FooterContainer>
            <MenusLegal>
                <LogoContainer>
                    <FooterLogoLink href="#" aria-label="Regresar a inicio">
                        <Logo
                            src={LogoImage}
                            alt="Logotipo de la revista Caras"
                        />
                    </FooterLogoLink>
                </LogoContainer>

                {footerMenus.map((menu, index) => (
                    <Menu key={index}>
                        <Title>{menu.title}</Title>
                        <Nav>
                            {menu.links.map((link, index) => (
                                <Link key={index} href={link.href}>
                                    {link.name}
                                </Link>
                            ))}
                        </Nav>
                    </Menu>
                ))}
            </MenusLegal>

            <DisclaimerSocial>
                <Text>
                    editorial televisa s.a. de c.v. todos los derechos
                    reservados. tbg - editorial televisa -{" "}
                    <span lang="en">entertainment - news</span>
                </Text>

                <SocialMedia>
                    {socialLinks.map((link) => {
                        const Icons = icons[link.name];

                        return (
                            <LinkIcon
                                key={link.name}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                href={link.href}
                            >
                                <Icon>
                                    <Icons />
                                </Icon>
                            </LinkIcon>
                        );
                    })}
                </SocialMedia>
            </DisclaimerSocial>
        </FooterContainer>
    );
};

export default Footer;
