import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NutritionOrderByWithRelationInput } from '../nutrition/nutrition-order-by-with-relation.input';
import { MaterialOrderByWithRelationInput } from '../material/material-order-by-with-relation.input';

@InputType()
export class NutritionRowOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nutirtionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    belongToId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => NutritionOrderByWithRelationInput, {nullable:true})
    nutirtion?: NutritionOrderByWithRelationInput;

    @Field(() => MaterialOrderByWithRelationInput, {nullable:true})
    belongMaterial?: MaterialOrderByWithRelationInput;
}
