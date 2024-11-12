import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishPlanCreateWithoutUsedMealPlanInput } from './dish-plan-create-without-used-meal-plan.input';
import { Type } from 'class-transformer';
import { DishPlanCreateOrConnectWithoutUsedMealPlanInput } from './dish-plan-create-or-connect-without-used-meal-plan.input';
import { DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput } from './dish-plan-upsert-with-where-unique-without-used-meal-plan.input';
import { DishPlanCreateManyUsedMealPlanInputEnvelope } from './dish-plan-create-many-used-meal-plan-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput } from './dish-plan-update-with-where-unique-without-used-meal-plan.input';
import { DishPlanUpdateManyWithWhereWithoutUsedMealPlanInput } from './dish-plan-update-many-with-where-without-used-meal-plan.input';
import { DishPlanScalarWhereInput } from './dish-plan-scalar-where.input';

@InputType()
export class DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput {

    @Field(() => [DishPlanCreateWithoutUsedMealPlanInput], {nullable:true})
    @Type(() => DishPlanCreateWithoutUsedMealPlanInput)
    create?: Array<DishPlanCreateWithoutUsedMealPlanInput>;

    @Field(() => [DishPlanCreateOrConnectWithoutUsedMealPlanInput], {nullable:true})
    @Type(() => DishPlanCreateOrConnectWithoutUsedMealPlanInput)
    connectOrCreate?: Array<DishPlanCreateOrConnectWithoutUsedMealPlanInput>;

    @Field(() => [DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput], {nullable:true})
    @Type(() => DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput)
    upsert?: Array<DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput>;

    @Field(() => DishPlanCreateManyUsedMealPlanInputEnvelope, {nullable:true})
    @Type(() => DishPlanCreateManyUsedMealPlanInputEnvelope)
    createMany?: DishPlanCreateManyUsedMealPlanInputEnvelope;

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

    @Field(() => [DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput], {nullable:true})
    @Type(() => DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput)
    update?: Array<DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput>;

    @Field(() => [DishPlanUpdateManyWithWhereWithoutUsedMealPlanInput], {nullable:true})
    @Type(() => DishPlanUpdateManyWithWhereWithoutUsedMealPlanInput)
    updateMany?: Array<DishPlanUpdateManyWithWhereWithoutUsedMealPlanInput>;

    @Field(() => [DishPlanScalarWhereInput], {nullable:true})
    @Type(() => DishPlanScalarWhereInput)
    deleteMany?: Array<DishPlanScalarWhereInput>;
}
