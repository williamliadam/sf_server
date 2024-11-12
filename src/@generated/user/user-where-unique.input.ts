import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { ProfileNullableRelationFilter } from '../profile/profile-nullable-relation-filter.input';
import { BodyDetailNullableRelationFilter } from '../body-detail/body-detail-nullable-relation-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { RecipeListRelationFilter } from '../recipe/recipe-list-relation-filter.input';
import { MealTemplateListRelationFilter } from '../meal-template/meal-template-list-relation-filter.input';
import { MealPlanListRelationFilter } from '../meal-plan/meal-plan-list-relation-filter.input';
import { DishPlanListRelationFilter } from '../dish-plan/dish-plan-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    wxId?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => ProfileNullableRelationFilter, {nullable:true})
    profile?: ProfileNullableRelationFilter;

    @Field(() => BodyDetailNullableRelationFilter, {nullable:true})
    bodyDetail?: BodyDetailNullableRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    myPosts?: PostListRelationFilter;

    @Field(() => RecipeListRelationFilter, {nullable:true})
    myRecipes?: RecipeListRelationFilter;

    @Field(() => MealTemplateListRelationFilter, {nullable:true})
    myMealTemplates?: MealTemplateListRelationFilter;

    @Field(() => MealPlanListRelationFilter, {nullable:true})
    myMealPlans?: MealPlanListRelationFilter;

    @Field(() => DishPlanListRelationFilter, {nullable:true})
    chargeDishPlans?: DishPlanListRelationFilter;
}
