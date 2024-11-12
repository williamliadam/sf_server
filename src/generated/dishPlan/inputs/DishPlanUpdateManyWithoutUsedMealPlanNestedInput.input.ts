import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateManyUsedMealPlanInputEnvelope } from "../../dishPlan/inputs/DishPlanCreateManyUsedMealPlanInputEnvelope.input";
import { DishPlanCreateOrConnectWithoutUsedMealPlanInput } from "../../dishPlan/inputs/DishPlanCreateOrConnectWithoutUsedMealPlanInput.input";
import { DishPlanCreateWithoutUsedMealPlanInput } from "../../dishPlan/inputs/DishPlanCreateWithoutUsedMealPlanInput.input";
import { DishPlanScalarWhereInput } from "../../dishPlan/inputs/DishPlanScalarWhereInput.input";
import { DishPlanUpdateManyWithWhereWithoutUsedMealPlanInput } from "../../dishPlan/inputs/DishPlanUpdateManyWithWhereWithoutUsedMealPlanInput.input";
import { DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput } from "../../dishPlan/inputs/DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput.input";
import { DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput } from "../../dishPlan/inputs/DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanUpdateManyWithoutUsedMealPlanNestedInput', { isAbstract: true })
export class DishPlanUpdateManyWithoutUsedMealPlanNestedInput {
  @NestJsGraphQL.Field(() => [DishPlanCreateWithoutUsedMealPlanInput], { nullable: true })
  create?: DishPlanCreateWithoutUsedMealPlanInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanCreateOrConnectWithoutUsedMealPlanInput], { nullable: true })
  connectOrCreate?: DishPlanCreateOrConnectWithoutUsedMealPlanInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput], { nullable: true })
  upsert?: DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput[] | undefined;

  @NestJsGraphQL.Field(() => DishPlanCreateManyUsedMealPlanInputEnvelope, { nullable: true })
  createMany?: DishPlanCreateManyUsedMealPlanInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  set?: DishPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  disconnect?: DishPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  delete?: DishPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  connect?: DishPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput], { nullable: true })
  update?: DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanUpdateManyWithWhereWithoutUsedMealPlanInput], { nullable: true })
  updateMany?: DishPlanUpdateManyWithWhereWithoutUsedMealPlanInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanScalarWhereInput], { nullable: true })
  deleteMany?: DishPlanScalarWhereInput[] | undefined;
}
