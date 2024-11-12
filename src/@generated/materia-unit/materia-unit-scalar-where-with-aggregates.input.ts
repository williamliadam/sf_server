import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MateriaUnitScalarWhereWithAggregatesInput {

    @Field(() => [MateriaUnitScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MateriaUnitScalarWhereWithAggregatesInput>;

    @Field(() => [MateriaUnitScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MateriaUnitScalarWhereWithAggregatesInput>;

    @Field(() => [MateriaUnitScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MateriaUnitScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    toKilo?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
