import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanCreateWithoutCreateByInput } from './meal-plan-create-without-create-by.input';
import { Type } from 'class-transformer';
import { MealPlanCreateOrConnectWithoutCreateByInput } from './meal-plan-create-or-connect-without-create-by.input';
import { MealPlanUpsertWithWhereUniqueWithoutCreateByInput } from './meal-plan-upsert-with-where-unique-without-create-by.input';
import { MealPlanCreateManyCreateByInputEnvelope } from './meal-plan-create-many-create-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanUpdateWithWhereUniqueWithoutCreateByInput } from './meal-plan-update-with-where-unique-without-create-by.input';
import { MealPlanUpdateManyWithWhereWithoutCreateByInput } from './meal-plan-update-many-with-where-without-create-by.input';
import { MealPlanScalarWhereInput } from './meal-plan-scalar-where.input';

@InputType()
export class MealPlanUncheckedUpdateManyWithoutCreateByNestedInput {

    @Field(() => [MealPlanCreateWithoutCreateByInput], {nullable:true})
    @Type(() => MealPlanCreateWithoutCreateByInput)
    create?: Array<MealPlanCreateWithoutCreateByInput>;

    @Field(() => [MealPlanCreateOrConnectWithoutCreateByInput], {nullable:true})
    @Type(() => MealPlanCreateOrConnectWithoutCreateByInput)
    connectOrCreate?: Array<MealPlanCreateOrConnectWithoutCreateByInput>;

    @Field(() => [MealPlanUpsertWithWhereUniqueWithoutCreateByInput], {nullable:true})
    @Type(() => MealPlanUpsertWithWhereUniqueWithoutCreateByInput)
    upsert?: Array<MealPlanUpsertWithWhereUniqueWithoutCreateByInput>;

    @Field(() => MealPlanCreateManyCreateByInputEnvelope, {nullable:true})
    @Type(() => MealPlanCreateManyCreateByInputEnvelope)
    createMany?: MealPlanCreateManyCreateByInputEnvelope;

    @Field(() => [MealPlanWhereUniqueInput], {nullable:true})
    @Type(() => MealPlanWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>>;

    @Field(() => [MealPlanWhereUniqueInput], {nullable:true})
    @Type(() => MealPlanWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>>;

    @Field(() => [MealPlanWhereUniqueInput], {nullable:true})
    @Type(() => MealPlanWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>>;

    @Field(() => [MealPlanWhereUniqueInput], {nullable:true})
    @Type(() => MealPlanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>>;

    @Field(() => [MealPlanUpdateWithWhereUniqueWithoutCreateByInput], {nullable:true})
    @Type(() => MealPlanUpdateWithWhereUniqueWithoutCreateByInput)
    update?: Array<MealPlanUpdateWithWhereUniqueWithoutCreateByInput>;

    @Field(() => [MealPlanUpdateManyWithWhereWithoutCreateByInput], {nullable:true})
    @Type(() => MealPlanUpdateManyWithWhereWithoutCreateByInput)
    updateMany?: Array<MealPlanUpdateManyWithWhereWithoutCreateByInput>;

    @Field(() => [MealPlanScalarWhereInput], {nullable:true})
    @Type(() => MealPlanScalarWhereInput)
    deleteMany?: Array<MealPlanScalarWhereInput>;
}
