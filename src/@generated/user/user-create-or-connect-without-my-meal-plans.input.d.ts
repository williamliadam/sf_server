import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutMyMealPlansInput } from './user-create-without-my-meal-plans.input';
export declare class UserCreateOrConnectWithoutMyMealPlansInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone'>;
    create: UserCreateWithoutMyMealPlansInput;
}
