import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MethodWhereInput } from './method-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeNullableRelationFilter } from '../recipe/recipe-nullable-relation-filter.input';

@InputType()
export class MethodWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => [MethodWhereInput], {nullable:true})
    AND?: Array<MethodWhereInput>;

    @Field(() => [MethodWhereInput], {nullable:true})
    OR?: Array<MethodWhereInput>;

    @Field(() => [MethodWhereInput], {nullable:true})
    NOT?: Array<MethodWhereInput>;

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
