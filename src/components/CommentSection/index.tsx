import React from "react";
import { users } from "../../data/users";
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

const CommentSection = () => {
    return (
        <Comments>
            <Title>Nuestros suscriptores dicen:</Title>
            <CommentsContainer>
                <CommentsContainerInner>
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
