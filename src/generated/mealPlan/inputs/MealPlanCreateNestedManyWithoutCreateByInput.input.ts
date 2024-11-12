import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanCreateManyCreateByInputEnvelope } from "../../mealPlan/inputs/MealPlanCreateManyCreateByInputEnvelope.input";
import { MealPlanCreateOrConnectWithoutCreateByInput } from "../../mealPlan/inputs/MealPlanCreateOrConnectWithoutCreateByInput.input";
import { MealPlanCreateWithoutCreateByInput } from "../../mealPlan/inputs/MealPlanCreateWithoutCreateByInput.input";
import { MealPlanWhereUniqueInput } from "../../mealPlan/inputs/MealPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('MealPlanCreateNestedManyWithoutCreateByInput', { isAbstract: true })
export class MealPlanCreateNestedManyWithoutCreateByInput {
  @NestJsGraphQL.Field(() => [MealPlanCreateWithoutCreateByInput], { nullable: true })
  create?: MealPlanCreateWithoutCreateByInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanCreateOrConnectWithoutCreateByInput], { nullable: true })
  connectOrCreate?: MealPlanCreateOrConnectWithoutCreateByInput[] | undefined;

  @NestJsGraphQL.Field(() => MealPlanCreateManyCreateByInputEnvelope, { nullable: true })
  createMany?: MealPlanCreateManyCreateByInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [MealPlanWhereUniqueInput], { nullable: true })
  connect?: MealPlanWhereUniqueInput[] | undefined;
}
