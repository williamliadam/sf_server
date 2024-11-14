import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutMyMealTemplatesInput } from './user-create-without-my-meal-templates.input';
export declare class UserCreateOrConnectWithoutMyMealTemplatesInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;
    create: UserCreateWithoutMyMealTemplatesInput;
}
