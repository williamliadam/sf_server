import { UserCreateWithoutMyMealTemplatesInput } from './user-create-without-my-meal-templates.input';
import { UserCreateOrConnectWithoutMyMealTemplatesInput } from './user-create-or-connect-without-my-meal-templates.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutMyMealTemplatesInput {
    create?: UserCreateWithoutMyMealTemplatesInput;
    connectOrCreate?: UserCreateOrConnectWithoutMyMealTemplatesInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone'>;
}
