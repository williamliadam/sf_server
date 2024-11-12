import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateManyRecipeInputEnvelope } from "../../dishPlan/inputs/DishPlanCreateManyRecipeInputEnvelope.input";
import { DishPlanCreateOrConnectWithoutRecipeInput } from "../../dishPlan/inputs/DishPlanCreateOrConnectWithoutRecipeInput.input";
import { DishPlanCreateWithoutRecipeInput } from "../../dishPlan/inputs/DishPlanCreateWithoutRecipeInput.input";
import { DishPlanScalarWhereInput } from "../../dishPlan/inputs/DishPlanScalarWhereInput.input";
import { DishPlanUpdateManyWithWhereWithoutRecipeInput } from "../../dishPlan/inputs/DishPlanUpdateManyWithWhereWithoutRecipeInput.input";
import { DishPlanUpdateWithWhereUniqueWithoutRecipeInput } from "../../dishPlan/inputs/DishPlanUpdateWithWhereUniqueWithoutRecipeInput.input";
import { DishPlanUpsertWithWhereUniqueWithoutRecipeInput } from "../../dishPlan/inputs/DishPlanUpsertWithWhereUniqueWithoutRecipeInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanUpdateManyWithoutRecipeNestedInput', { isAbstract: true })
export class DishPlanUpdateManyWithoutRecipeNestedInput {
  @NestJsGraphQL.Field(() => [DishPlanCreateWithoutRecipeInput], { nullable: true })
  create?: DishPlanCreateWithoutRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanCreateOrConnectWithoutRecipeInput], { nullable: true })
  connectOrCreate?: DishPlanCreateOrConnectWithoutRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanUpsertWithWhereUniqueWithoutRecipeInput], { nullable: true })
  upsert?: DishPlanUpsertWithWhereUniqueWithoutRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => DishPlanCreateManyRecipeInputEnvelope, { nullable: true })
  createMany?: DishPlanCreateManyRecipeInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  set?: DishPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  disconnect?: DishPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  delete?: DishPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  connect?: DishPlanWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanUpdateWithWhereUniqueWithoutRecipeInput], { nullable: true })
  update?: DishPlanUpdateWithWhereUniqueWithoutRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanUpdateManyWithWhereWithoutRecipeInput], { nullable: true })
  updateMany?: DishPlanUpdateManyWithWhereWithoutRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanScalarWhereInput], { nullable: true })
  deleteMany?: DishPlanScalarWhereInput[] | undefined;
}
