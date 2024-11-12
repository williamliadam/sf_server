import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyDetailWhereInput } from './body-detail-where.input';
import { Type } from 'class-transformer';
import { BodyDetailOrderByWithRelationInput } from './body-detail-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BodyDetailScalarFieldEnum } from './body-detail-scalar-field.enum';

@ArgsType()
export class FindManyBodyDetailArgs {

    @Field(() => BodyDetailWhereInput, {nullable:true})
    @Type(() => BodyDetailWhereInput)
    where?: BodyDetailWhereInput;

    @Field(() => [BodyDetailOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BodyDetailOrderByWithRelationInput>;

    @Field(() => BodyDetailWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BodyDetailScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BodyDetailScalarFieldEnum>;
}
