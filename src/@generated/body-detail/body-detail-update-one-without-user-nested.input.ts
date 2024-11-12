import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyDetailCreateWithoutUserInput } from './body-detail-create-without-user.input';
import { Type } from 'class-transformer';
import { BodyDetailCreateOrConnectWithoutUserInput } from './body-detail-create-or-connect-without-user.input';
import { BodyDetailUpsertWithoutUserInput } from './body-detail-upsert-without-user.input';
import { BodyDetailWhereInput } from './body-detail-where.input';
import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
import { BodyDetailUpdateToOneWithWhereWithoutUserInput } from './body-detail-update-to-one-with-where-without-user.input';

@InputType()
export class BodyDetailUpdateOneWithoutUserNestedInput {

    @Field(() => BodyDetailCreateWithoutUserInput, {nullable:true})
    @Type(() => BodyDetailCreateWithoutUserInput)
    create?: BodyDetailCreateWithoutUserInput;

    @Field(() => BodyDetailCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => BodyDetailCreateOrConnectWithoutUserInput)
    connectOrCreate?: BodyDetailCreateOrConnectWithoutUserInput;

    @Field(() => BodyDetailUpsertWithoutUserInput, {nullable:true})
    @Type(() => BodyDetailUpsertWithoutUserInput)
    upsert?: BodyDetailUpsertWithoutUserInput;

    @Field(() => BodyDetailWhereInput, {nullable:true})
    @Type(() => BodyDetailWhereInput)
    disconnect?: BodyDetailWhereInput;

    @Field(() => BodyDetailWhereInput, {nullable:true})
    @Type(() => BodyDetailWhereInput)
    delete?: BodyDetailWhereInput;

    @Field(() => BodyDetailWhereUniqueInput, {nullable:true})
    @Type(() => BodyDetailWhereUniqueInput)
    connect?: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => BodyDetailUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => BodyDetailUpdateToOneWithWhereWithoutUserInput)
    update?: BodyDetailUpdateToOneWithWhereWithoutUserInput;
}
