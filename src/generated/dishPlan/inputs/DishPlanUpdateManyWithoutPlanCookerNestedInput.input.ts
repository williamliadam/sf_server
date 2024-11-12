import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateManyPlanCookerInputEnvelope } from "../../dishPlan/inputs/DishPlanCreateManyPlanCookerInputEnvelope.input";
import { DishPlanCreateOrConnectWithoutPlanCookerInput } from "../../dishPlan/inputs/DishPlanCreateOrConnectWithoutPlanCookerInput.input";
import { DishPlanCreateWithoutPlanCookerInput } from "../../dishPlan/inputs/DishPlanCreateWithoutPlanCookerInput.input";
import { DishPlanScalarWhereInput } from "../../dishPlan/inputs/DishPlanScalarWhereInput.input";
import { DishPlanUpdateManyWithWhereWithoutPlanCookerInput } from "../../dishPlan/inputs/DishPlanUpdateManyWithWhereWithoutPlanCookerInput.input";
import { DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput } from "../../dishPlan/inputs/DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput.input";
import { DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput } from "../../dishPlan/inputs/DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanUpdateManyWithoutPlanCookerNestedInput', { isAbstract: true })
export class DishPlanUpdateManyWithoutPlanCookerNestedInput {
  @NestJsGraphQL.Field(() => [DishPlanCreateWithoutPlanCookerInput], { nullable: true })
  create?: DishPlanCreateWithoutPlanCookerInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanCreateOrConnectWithoutPlanCookerInput], { nullable: true })
  connectOrCreate?: DishPlanCreateOrConnectWithoutPlanCookerInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput], { nullable: true })
  upsert?: DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput[] | undefined;

  @NestJsGraphQL.Field(() => DishPlanCreateManyPlanCookerInputEnvelope, { nullable: true })
  createMany?: DishPlanCreateManyPlanCookerInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  set?: DishPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  disconnect?: DishPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  delete?: DishPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  connect?: DishPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput], { nullable: true })
  update?: DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanUpdateManyWithWhereWithoutPlanCookerInput], { nullable: true })
  updateMany?: DishPlanUpdateManyWithWhereWithoutPlanCookerInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanScalarWhereInput], { nullable: true })
  deleteMany?: DishPlanScalarWhereInput[] | undefined;
}
