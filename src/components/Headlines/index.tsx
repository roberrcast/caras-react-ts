import { newsData } from "../../data/headlines";
import {
    HeadlinesContainer,
    HeadlinesContainerInner,
    HeadlinesCard,
    HeadlinesImageLink,
    Image,
    Content,
    SectionLink,
    SectionTitle,
    Title,
    HeadlineText,
    Footer,
    Time,
    AuthorLink,
} from "./styles";

const Headlines = () => {
    return (
        <HeadlinesContainer>
            <div>
                <SectionTitle>Últimas Noticias</SectionTitle>
            </div>
            <HeadlinesContainerInner>
                {newsData.map((item, id) => (
                    <HeadlinesCard key={id}>
                        <HeadlinesImageLink
                            href="#"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
                            <Image src={item.image} alt="" loading="lazy" />
                        </HeadlinesImageLink>

                        <Content>
                            <SectionLink
                                href={`#${item.section}`}
                                aria-label={`${item.section}. Ir a esta sección`}
                            >
                                {item.section}
                            </SectionLink>

                            <Title>
                                <HeadlineText
                                    href={`#${item.headline}`}
                                    aria-label={`Leer noticia completa: ${item.headline}`}
                                >
                                    {item.headline}
                                </HeadlineText>
                            </Title>

                            <Footer>
                                <Time dateTime={item.datetime}>
                                    {item.date}
                                </Time>
                                <span> &middot; </span>
                                <AuthorLink
                                    href={`#${item.author}`}
                                    aria-label={`Ver perfil del autor ${item.author}`}
                                >
                                    {item.author}
                                </AuthorLink>
                            </Footer>
                        </Content>
                    </HeadlinesCard>
                ))}
            </HeadlinesContainerInner>
        </HeadlinesContainer>
    );
};

export default Headlines;
