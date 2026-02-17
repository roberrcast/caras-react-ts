import React from "react";
import {
    FeaturedSectionContainer,
    FeaturedSectionInner,
    Title,
    BackgroundVideo,
    VideoOverlay,
    Content,
    ColumnRight,
    ColumnLeft,
    ColumnLeftInner,
    Text,
    Button,
    Pause,
    Play,
} from "./styles";
// Videos
import heroVideo from "../../assets/fancy_hairstyle_optimized.mp4";
import heroVideoWebm from "../../assets/fancy_hairstyle.webm";

const FeaturedSection = () => {
    const featuredData = [
        { span: "Entérate", text: "de lo último de la moda" },
        { span: "Descubre", text: "culturas y arte" },
        { span: "Infórmate", text: "de lo que sucede en el mundo" },
        { span: "Conoce", text: "las novedades del entretenimiento" },
    ];

    return (
        <FeaturedSectionContainer>
            <Title>Nuestros suscriptores disfrutan de mucho más...</Title>

            <FeaturedSectionInner>
                <BackgroundVideo autoPlay muted loop playsInline>
                    <source src={heroVideo} type="video/mp4" />
                    <source src={heroVideoWebm} type="video/webm" />
                    Su navegador es incompatible con la etiqueta de video.
                </BackgroundVideo>

                <VideoOverlay>
                    <Content>
                        <ColumnRight>
                            <Button>
                                <Pause></Pause>
                            </Button>
                        </ColumnRight>

                        <ColumnLeft>
                            <ColumnLeftInner>
                                {featuredData.map((item, index) => (
                                    <Text key={index}>
                                        <span>{item.span}</span> {item.text}
                                    </Text>
                                ))}
                            </ColumnLeftInner>
                        </ColumnLeft>
                    </Content>
                </VideoOverlay>
            </FeaturedSectionInner>
        </FeaturedSectionContainer>
    );
};

export default FeaturedSection;
