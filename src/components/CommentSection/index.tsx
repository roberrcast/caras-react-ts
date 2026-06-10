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
            <Title>Voces de nuestra comunidad</Title>
            <CommentsContainer>
                <CommentsContainerInner>
                    {users.map((user, id) => (
                        <CommentsCard key={id}>
                            <Image
                                src={user.userImage}
                                loading="lazy"
                                alt={`Foto de perfil de ${user.username}`}
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
