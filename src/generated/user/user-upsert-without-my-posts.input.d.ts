import { UserUpdateWithoutMyPostsInput } from './user-update-without-my-posts.input';
import { UserCreateWithoutMyPostsInput } from './user-create-without-my-posts.input';
import { UserWhereInput } from './user-where.input';
export declare class UserUpsertWithoutMyPostsInput {
    update: UserUpdateWithoutMyPostsInput;
    create: UserCreateWithoutMyPostsInput;
    where?: UserWhereInput;
}
