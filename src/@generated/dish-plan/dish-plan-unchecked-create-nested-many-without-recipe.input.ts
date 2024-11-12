import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishPlanCreateWithoutRecipeInput } from './dish-plan-create-without-recipe.input';
import { Type } from 'class-transformer';
import { DishPlanCreateOrConnectWithoutRecipeInput } from './dish-plan-create-or-connect-without-recipe.input';
import { DishPlanCreateManyRecipeInputEnvelope } from './dish-plan-create-many-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';

@InputType()
export class DishPlanUncheckedCreateNestedManyWithoutRecipeInput {

    @Field(() => [DishPlanCreateWithoutRecipeInput], {nullable:true})
    @Type(() => DishPlanCreateWithoutRecipeInput)
    create?: Array<DishPlanCreateWithoutRecipeInput>;

    @Field(() => [DishPlanCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => DishPlanCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<DishPlanCreateOrConnectWithoutRecipeInput>;

    @Field(() => DishPlanCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => DishPlanCreateManyRecipeInputEnvelope)
    createMany?: DishPlanCreateManyRecipeInputEnvelope;

    @Field(() => [DishPlanWhereUniqueInput], {nullable:true})
    @Type(() => DishPlanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;
}
