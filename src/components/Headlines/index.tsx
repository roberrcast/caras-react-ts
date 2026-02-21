import React from "react";
import { newsData } from "../../data/headlines";
import {
    HeadlinesContainer,
    HeadlinesContainerInner,
    HeadlinesCard,
    HeadlinesImageLink,
    Image,
    Content,
    SectionLink,
    Title,
    HeadlineText,
    Footer,
    Time,
    AuthorLink,
} from "./styles";

const Headlines = () => {
    return (
        <HeadlinesContainer>
            <HeadlinesContainerInner>
                {newsData.map((item, id) => (
                    <HeadlinesCard key={id}>
                        <HeadlinesImageLink href="#">
                            <Image src={item.image} alt={item.alt} />
                        </HeadlinesImageLink>

                        <Content>
                            <SectionLink href="#">{item.section}</SectionLink>

                            <Title>
                                <HeadlineText href="#">
                                    {item.headline}
                                </HeadlineText>
                            </Title>

                            <Footer>
                                <Time dateTime={item.datetime}>
                                    {item.date}
                                </Time>
                                <span> &middot; </span>
                                <AuthorLink href="#">{item.author}</AuthorLink>
                            </Footer>
                        </Content>
                    </HeadlinesCard>
                ))}
            </HeadlinesContainerInner>
        </HeadlinesContainer>
    );
};

export default Headlines;
