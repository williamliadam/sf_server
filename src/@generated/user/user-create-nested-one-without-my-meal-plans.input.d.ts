import { UserCreateWithoutMyMealPlansInput } from './user-create-without-my-meal-plans.input';
import { UserCreateOrConnectWithoutMyMealPlansInput } from './user-create-or-connect-without-my-meal-plans.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutMyMealPlansInput {
    create?: UserCreateWithoutMyMealPlansInput;
    connectOrCreate?: UserCreateOrConnectWithoutMyMealPlansInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone'>;
}
