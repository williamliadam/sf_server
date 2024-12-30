import { UserCreateWithoutMyMealPlansInput } from './user-create-without-my-meal-plans.input';
import { UserCreateOrConnectWithoutMyMealPlansInput } from './user-create-or-connect-without-my-meal-plans.input';
import { UserUpsertWithoutMyMealPlansInput } from './user-upsert-without-my-meal-plans.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutMyMealPlansInput } from './user-update-to-one-with-where-without-my-meal-plans.input';
export declare class UserUpdateOneRequiredWithoutMyMealPlansNestedInput {
    create?: UserCreateWithoutMyMealPlansInput;
    connectOrCreate?: UserCreateOrConnectWithoutMyMealPlansInput;
    upsert?: UserUpsertWithoutMyMealPlansInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone'>;
    update?: UserUpdateToOneWithWhereWithoutMyMealPlansInput;
}
