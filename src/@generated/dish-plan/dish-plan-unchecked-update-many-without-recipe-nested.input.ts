import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishPlanCreateWithoutRecipeInput } from './dish-plan-create-without-recipe.input';
import { Type } from 'class-transformer';
import { DishPlanCreateOrConnectWithoutRecipeInput } from './dish-plan-create-or-connect-without-recipe.input';
import { DishPlanUpsertWithWhereUniqueWithoutRecipeInput } from './dish-plan-upsert-with-where-unique-without-recipe.input';
import { DishPlanCreateManyRecipeInputEnvelope } from './dish-plan-create-many-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanUpdateWithWhereUniqueWithoutRecipeInput } from './dish-plan-update-with-where-unique-without-recipe.input';
import { DishPlanUpdateManyWithWhereWithoutRecipeInput } from './dish-plan-update-many-with-where-without-recipe.input';
import { DishPlanScalarWhereInput } from './dish-plan-scalar-where.input';

@InputType()
export class DishPlanUncheckedUpdateManyWithoutRecipeNestedInput {

    @Field(() => [DishPlanCreateWithoutRecipeInput], {nullable:true})
    @Type(() => DishPlanCreateWithoutRecipeInput)
    create?: Array<DishPlanCreateWithoutRecipeInput>;

    @Field(() => [DishPlanCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => DishPlanCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<DishPlanCreateOrConnectWithoutRecipeInput>;

    @Field(() => [DishPlanUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => DishPlanUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<DishPlanUpsertWithWhereUniqueWithoutRecipeInput>;

    @Field(() => DishPlanCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => DishPlanCreateManyRecipeInputEnvelope)
    createMany?: DishPlanCreateManyRecipeInputEnvelope;

    @Field(() => [DishPlanWhereUniqueInput], {nullable:true})
    @Type(() => DishPlanWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;

    @Field(() => [DishPlanWhereUniqueInput], {nullable:true})
    @Type(() => DishPlanWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;

    @Field(() => [DishPlanWhereUniqueInput], {nullable:true})
    @Type(() => DishPlanWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;

    @Field(() => [DishPlanWhereUniqueInput], {nullable:true})
    @Type(() => DishPlanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>>;

    @Field(() => [DishPlanUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => DishPlanUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<DishPlanUpdateWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [DishPlanUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => DishPlanUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<DishPlanUpdateManyWithWhereWithoutRecipeInput>;

    @Field(() => [DishPlanScalarWhereInput], {nullable:true})
    @Type(() => DishPlanScalarWhereInput)
    deleteMany?: Array<DishPlanScalarWhereInput>;
}
