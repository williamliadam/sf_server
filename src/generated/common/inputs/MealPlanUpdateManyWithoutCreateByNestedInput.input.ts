import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanCreateManyCreateByInputEnvelope } from "../../mealPlan/inputs/MealPlanCreateManyCreateByInputEnvelope.input";
import { MealPlanCreateOrConnectWithoutCreateByInput } from "../../mealPlan/inputs/MealPlanCreateOrConnectWithoutCreateByInput.input";
import { MealPlanCreateWithoutCreateByInput } from "../../mealPlan/inputs/MealPlanCreateWithoutCreateByInput.input";
import { MealPlanScalarWhereInput } from "../../mealPlan/inputs/MealPlanScalarWhereInput.input";
import { MealPlanWhereUniqueInput } from "../../mealPlan/inputs/MealPlanWhereUniqueInput.input";
import { MealPlanUpdateManyWithWhereWithoutCreateByInput } from "./MealPlanUpdateManyWithWhereWithoutCreateByInput.input";
import { MealPlanUpdateWithWhereUniqueWithoutCreateByInput } from "./MealPlanUpdateWithWhereUniqueWithoutCreateByInput.input";
import { MealPlanUpsertWithWhereUniqueWithoutCreateByInput } from "./MealPlanUpsertWithWhereUniqueWithoutCreateByInput.input";

@NestJsGraphQL.InputType('MealPlanUpdateManyWithoutCreateByNestedInput', { isAbstract: true })
export class MealPlanUpdateManyWithoutCreateByNestedInput {
  @NestJsGraphQL.Field(() => [MealPlanCreateWithoutCreateByInput], { nullable: true })
  create?: MealPlanCreateWithoutCreateByInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanCreateOrConnectWithoutCreateByInput], { nullable: true })
  connectOrCreate?: MealPlanCreateOrConnectWithoutCreateByInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanUpsertWithWhereUniqueWithoutCreateByInput], { nullable: true })
  upsert?: MealPlanUpsertWithWhereUniqueWithoutCreateByInput[] | undefined;

  @NestJsGraphQL.Field(() => MealPlanCreateManyCreateByInputEnvelope, { nullable: true })
  createMany?: MealPlanCreateManyCreateByInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [MealPlanWhereUniqueInput], { nullable: true })
  set?: MealPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanWhereUniqueInput], { nullable: true })
  disconnect?: MealPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanWhereUniqueInput], { nullable: true })
  delete?: MealPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanWhereUniqueInput], { nullable: true })
  connect?: MealPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanUpdateWithWhereUniqueWithoutCreateByInput], { nullable: true })
  update?: MealPlanUpdateWithWhereUniqueWithoutCreateByInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanUpdateManyWithWhereWithoutCreateByInput], { nullable: true })
  updateMany?: MealPlanUpdateManyWithWhereWithoutCreateByInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanScalarWhereInput], { nullable: true })
  deleteMany?: MealPlanScalarWhereInput[] | undefined;
}
