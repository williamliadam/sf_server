import { UserCreateWithoutMyMealTemplatesInput } from './user-create-without-my-meal-templates.input';
import { UserCreateOrConnectWithoutMyMealTemplatesInput } from './user-create-or-connect-without-my-meal-templates.input';
import { UserUpsertWithoutMyMealTemplatesInput } from './user-upsert-without-my-meal-templates.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutMyMealTemplatesInput } from './user-update-to-one-with-where-without-my-meal-templates.input';
export declare class UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput {
    create?: UserCreateWithoutMyMealTemplatesInput;
    connectOrCreate?: UserCreateOrConnectWithoutMyMealTemplatesInput;
    upsert?: UserUpsertWithoutMyMealTemplatesInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone'>;
    update?: UserUpdateToOneWithWhereWithoutMyMealTemplatesInput;
}
