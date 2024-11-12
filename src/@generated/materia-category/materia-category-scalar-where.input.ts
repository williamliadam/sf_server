import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MateriaCategoryScalarWhereInput {

    @Field(() => [MateriaCategoryScalarWhereInput], {nullable:true})
    AND?: Array<MateriaCategoryScalarWhereInput>;

    @Field(() => [MateriaCategoryScalarWhereInput], {nullable:true})
    OR?: Array<MateriaCategoryScalarWhereInput>;

    @Field(() => [MateriaCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<MateriaCategoryScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    lastId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
