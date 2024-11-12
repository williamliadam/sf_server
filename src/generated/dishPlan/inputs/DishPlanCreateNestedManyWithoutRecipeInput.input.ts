import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateManyRecipeInputEnvelope } from "../../dishPlan/inputs/DishPlanCreateManyRecipeInputEnvelope.input";
import { DishPlanCreateOrConnectWithoutRecipeInput } from "../../dishPlan/inputs/DishPlanCreateOrConnectWithoutRecipeInput.input";
import { DishPlanCreateWithoutRecipeInput } from "../../dishPlan/inputs/DishPlanCreateWithoutRecipeInput.input";
import { DishPlanWhereUniqueInput } from "../../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishPlanCreateNestedManyWithoutRecipeInput', { isAbstract: true })
export class DishPlanCreateNestedManyWithoutRecipeInput {
  @NestJsGraphQL.Field(() => [DishPlanCreateWithoutRecipeInput], { nullable: true })
  create?: DishPlanCreateWithoutRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanCreateOrConnectWithoutRecipeInput], { nullable: true })
  connectOrCreate?: DishPlanCreateOrConnectWithoutRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => DishPlanCreateManyRecipeInputEnvelope, { nullable: true })
  createMany?: DishPlanCreateManyRecipeInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereUniqueInput], { nullable: true })
  connect?: DishPlanWhereUniqueInput[] | undefined;
}
