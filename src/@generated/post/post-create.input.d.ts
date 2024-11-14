import { UserCreateNestedOneWithoutMyPostsInput } from '../user/user-create-nested-one-without-my-posts.input';
export declare class PostCreateInput {
    title: string;
    content?: string;
    stars?: number;
    follows?: number;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author?: UserCreateNestedOneWithoutMyPostsInput;
}
