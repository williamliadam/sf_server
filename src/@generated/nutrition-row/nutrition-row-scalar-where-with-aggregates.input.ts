import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class NutritionRowScalarWhereWithAggregatesInput {

    @Field(() => [NutritionRowScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NutritionRowScalarWhereWithAggregatesInput>;

    @Field(() => [NutritionRowScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NutritionRowScalarWhereWithAggregatesInput>;

    @Field(() => [NutritionRowScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NutritionRowScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    nutirtionId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    percent?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    belongToId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
