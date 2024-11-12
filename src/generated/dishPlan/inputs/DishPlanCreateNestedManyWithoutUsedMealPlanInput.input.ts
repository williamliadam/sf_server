import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateManyUsedMealPlanInputEnvelope } from "../../dishPlan/inputs/DishPlanCreateManyUsedMealPlanInputEnvelope.input";
import { DishPlanCreateOrConnectWithoutUsedMealPlanInput } from "../../dishPlan/inputs/DishPlanCreateOrConnectWithoutUsedMealPlanInput.input";
import { DishPlanCreateWithoutUsedMealPlanInput } from "../../dishPlan/inputs/DishPlanCreateWithoutUsedMealPlanInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanCreateNestedManyWithoutUsedMealPlanInput', { isAbstract: true })
export class DishPlanCreateNestedManyWithoutUsedMealPlanInput {
  @NestJsGraphQL.Field(() => [DishPlanCreateWithoutUsedMealPlanInput], { nullable: true })
  create?: DishPlanCreateWithoutUsedMealPlanInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanCreateOrConnectWithoutUsedMealPlanInput], { nullable: true })
  connectOrCreate?: DishPlanCreateOrConnectWithoutUsedMealPlanInput[] | undefined;

  @NestJsGraphQL.Field(() => DishPlanCreateManyUsedMealPlanInputEnvelope, { nullable: true })
  createMany?: DishPlanCreateManyUsedMealPlanInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  connect?: DishPlanWhereUniqueInput[] | undefined;
}
