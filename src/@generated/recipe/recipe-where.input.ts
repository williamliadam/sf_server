import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IngredientListRelationFilter } from '../ingredient/ingredient-list-relation-filter.input';
import { MethodListRelationFilter } from '../method/method-list-relation-filter.input';
import { DishPlanListRelationFilter } from '../dish-plan/dish-plan-list-relation-filter.input';
import { DishTemplateListRelationFilter } from '../dish-template/dish-template-list-relation-filter.input';

@InputType()
export class RecipeWhereInput {

    @Field(() => [RecipeWhereInput], {nullable:true})
    AND?: Array<RecipeWhereInput>;

    @Field(() => [RecipeWhereInput], {nullable:true})
    OR?: Array<RecipeWhereInput>;

    @Field(() => [RecipeWhereInput], {nullable:true})
    NOT?: Array<RecipeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    stars?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => IngredientListRelationFilter, {nullable:true})
    ingredients?: IngredientListRelationFilter;

    @Field(() => MethodListRelationFilter, {nullable:true})
    methods?: MethodListRelationFilter;

    @Field(() => DishPlanListRelationFilter, {nullable:true})
    usedDishPlans?: DishPlanListRelationFilter;

    @Field(() => DishTemplateListRelationFilter, {nullable:true})
    usedDishTemplates?: DishTemplateListRelationFilter;
}
