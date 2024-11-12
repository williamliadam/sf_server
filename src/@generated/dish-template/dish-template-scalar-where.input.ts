import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class DishTemplateScalarWhereInput {

    @Field(() => [DishTemplateScalarWhereInput], {nullable:true})
    AND?: Array<DishTemplateScalarWhereInput>;

    @Field(() => [DishTemplateScalarWhereInput], {nullable:true})
    OR?: Array<DishTemplateScalarWhereInput>;

    @Field(() => [DishTemplateScalarWhereInput], {nullable:true})
    NOT?: Array<DishTemplateScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    recipeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    amount?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    mealTemplateId?: IntNullableFilter;
}
