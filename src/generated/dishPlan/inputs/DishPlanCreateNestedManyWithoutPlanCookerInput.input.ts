import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateManyPlanCookerInputEnvelope } from "../../dishPlan/inputs/DishPlanCreateManyPlanCookerInputEnvelope.input";
import { DishPlanCreateOrConnectWithoutPlanCookerInput } from "../../dishPlan/inputs/DishPlanCreateOrConnectWithoutPlanCookerInput.input";
import { DishPlanCreateWithoutPlanCookerInput } from "../../dishPlan/inputs/DishPlanCreateWithoutPlanCookerInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanCreateNestedManyWithoutPlanCookerInput', { isAbstract: true })
export class DishPlanCreateNestedManyWithoutPlanCookerInput {
  @NestJsGraphQL.Field(() => [DishPlanCreateWithoutPlanCookerInput], { nullable: true })
  create?: DishPlanCreateWithoutPlanCookerInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanCreateOrConnectWithoutPlanCookerInput], { nullable: true })
  connectOrCreate?: DishPlanCreateOrConnectWithoutPlanCookerInput[] | undefined;

  @NestJsGraphQL.Field(() => DishPlanCreateManyPlanCookerInputEnvelope, { nullable: true })
  createMany?: DishPlanCreateManyPlanCookerInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  connect?: DishPlanWhereUniqueInput[] | undefined;
}
