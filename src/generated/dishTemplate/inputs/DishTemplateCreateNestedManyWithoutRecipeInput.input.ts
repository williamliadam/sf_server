import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateCreateManyRecipeInputEnvelope } from "../../dishTemplate/inputs/DishTemplateCreateManyRecipeInputEnvelope.input";
import { DishTemplateCreateOrConnectWithoutRecipeInput } from "../../dishTemplate/inputs/DishTemplateCreateOrConnectWithoutRecipeInput.input";
import { DishTemplateCreateWithoutRecipeInput } from "../../dishTemplate/inputs/DishTemplateCreateWithoutRecipeInput.input";
import { DishTemplateWhereUniqueInput } from "../../dishTemplate/inputs/DishTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishTemplateCreateNestedManyWithoutRecipeInput', { isAbstract: true })
export class DishTemplateCreateNestedManyWithoutRecipeInput {
  @NestJsGraphQL.Field(() => [DishTemplateCreateWithoutRecipeInput], { nullable: true })
  create?: DishTemplateCreateWithoutRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateCreateOrConnectWithoutRecipeInput], { nullable: true })
  connectOrCreate?: DishTemplateCreateOrConnectWithoutRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => DishTemplateCreateManyRecipeInputEnvelope, { nullable: true })
  createMany?: DishTemplateCreateManyRecipeInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
  connect?: DishTemplateWhereUniqueInput[] | undefined;
}
