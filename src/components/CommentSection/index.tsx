import React from "react";
import {
    Comments,
    CommentsContainer,
    Title,
    CommentsContainerInner,
    CommentsCard,
    Image,
    Username,
    Text,
} from "./styles";

import userImg1 from "../../assets/testimonial1.jpg";
import userImg2 from "../../assets/testimonial2.jpg";
import userImg3 from "../../assets/testimonial3.jpg";
import userImg4 from "../../assets/guy.jpg";

const CommentSection = () => {
    type User = {
        id: number;
        username: string;
        userImage: string;
        comment: string;
    };

    const users: User[] = [
        {
            id: 1,
            username: "Laura",
            userImage: userImg1,
            comment:
                '"Al suscribirme, tuve la oportunidad de manternerme al día de lo último en la moda fitness."',
        },
        {
            id: 2,
            username: "Ramón",
            userImage: userImg2,
            comment:
                '"La verdad no sabía qué esperar, pero al suscribirme pude estar al tanto de todas las novedades en el mundo."',
        },
        {
            id: 3,
            username: "Vidales",
            userImage: userImg3,
            comment:
                '"La mejor parte de suscribirme fue poder estar informada de todo sin necesidad de buscar por mi cuenta, todo está al alcance de mis manos."',
        },
        {
            id: 4,
            username: "Jorge",
            userImage: userImg4,
            comment:
                '"Al suscribirme tuve la oportunidad de ver las noticias desde otra perspectiva."',
        },
    ];

    return (
        <Comments>
            <CommentsContainer>
                <CommentsContainerInner>
                    <Title>Nuestros suscriptores dicen:</Title>
                    {users.map((user, id) => (
                        <CommentsCard key={id}>
                            <Image
                                src={user.userImage}
                                alt="imagen de usuario"
                            />

                            <Username>{user.username}</Username>

                            <Text>{user.comment}</Text>
                        </CommentsCard>
                    ))}
                </CommentsContainerInner>
            </CommentsContainer>
        </Comments>
    );
};

export default CommentSection;
