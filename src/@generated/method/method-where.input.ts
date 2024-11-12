import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeNullableRelationFilter } from '../recipe/recipe-nullable-relation-filter.input';

@InputType()
export class MethodWhereInput {

    @Field(() => [MethodWhereInput], {nullable:true})
    AND?: Array<MethodWhereInput>;

    @Field(() => [MethodWhereInput], {nullable:true})
    OR?: Array<MethodWhereInput>;

    @Field(() => [MethodWhereInput], {nullable:true})
    NOT?: Array<MethodWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    desc?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    recipeId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeNullableRelationFilter, {nullable:true})
    usedRecipe?: RecipeNullableRelationFilter;
}
