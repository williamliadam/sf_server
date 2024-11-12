import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MateriaCategoryOrderByWithRelationInput } from '../materia-category/materia-category-order-by-with-relation.input';
import { NutritionRowOrderByRelationAggregateInput } from '../nutrition-row/nutrition-row-order-by-relation-aggregate.input';
import { IngredientOrderByRelationAggregateInput } from '../ingredient/ingredient-order-by-relation-aggregate.input';

@InputType()
export class MaterialOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nickName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    materiaCategoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MateriaCategoryOrderByWithRelationInput, {nullable:true})
    category?: MateriaCategoryOrderByWithRelationInput;

    @Field(() => NutritionRowOrderByRelationAggregateInput, {nullable:true})
    nutritionMatrix?: NutritionRowOrderByRelationAggregateInput;

    @Field(() => IngredientOrderByRelationAggregateInput, {nullable:true})
    ingredients?: IngredientOrderByRelationAggregateInput;
}
