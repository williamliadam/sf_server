import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
import { Type } from 'class-transformer';
import { BodyDetailCreateWithoutUserInput } from './body-detail-create-without-user.input';

@InputType()
export class BodyDetailCreateOrConnectWithoutUserInput {

    @Field(() => BodyDetailWhereUniqueInput, {nullable:false})
    @Type(() => BodyDetailWhereUniqueInput)
    where!: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => BodyDetailCreateWithoutUserInput, {nullable:false})
    @Type(() => BodyDetailCreateWithoutUserInput)
    create!: BodyDetailCreateWithoutUserInput;
}
