import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MealTemplateScalarWhereWithAggregatesInput {

    @Field(() => [MealTemplateScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MealTemplateScalarWhereWithAggregatesInput>;

    @Field(() => [MealTemplateScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MealTemplateScalarWhereWithAggregatesInput>;

    @Field(() => [MealTemplateScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MealTemplateScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
