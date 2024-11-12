import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutBodyDetailInput } from './user-update-without-body-detail.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBodyDetailInput } from './user-create-without-body-detail.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutBodyDetailInput {

    @Field(() => UserUpdateWithoutBodyDetailInput, {nullable:false})
    @Type(() => UserUpdateWithoutBodyDetailInput)
    update!: UserUpdateWithoutBodyDetailInput;

    @Field(() => UserCreateWithoutBodyDetailInput, {nullable:false})
    @Type(() => UserCreateWithoutBodyDetailInput)
    create!: UserCreateWithoutBodyDetailInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
