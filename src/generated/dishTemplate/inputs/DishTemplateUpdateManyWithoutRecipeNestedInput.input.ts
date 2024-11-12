import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateCreateManyRecipeInputEnvelope } from "../../dishTemplate/inputs/DishTemplateCreateManyRecipeInputEnvelope.input";
import { DishTemplateCreateOrConnectWithoutRecipeInput } from "../../dishTemplate/inputs/DishTemplateCreateOrConnectWithoutRecipeInput.input";
import { DishTemplateCreateWithoutRecipeInput } from "../../dishTemplate/inputs/DishTemplateCreateWithoutRecipeInput.input";
import { DishTemplateScalarWhereInput } from "../../dishTemplate/inputs/DishTemplateScalarWhereInput.input";
import { DishTemplateUpdateManyWithWhereWithoutRecipeInput } from "../../dishTemplate/inputs/DishTemplateUpdateManyWithWhereWithoutRecipeInput.input";
import { DishTemplateUpdateWithWhereUniqueWithoutRecipeInput } from "../../dishTemplate/inputs/DishTemplateUpdateWithWhereUniqueWithoutRecipeInput.input";
import { DishTemplateUpsertWithWhereUniqueWithoutRecipeInput } from "../../dishTemplate/inputs/DishTemplateUpsertWithWhereUniqueWithoutRecipeInput.input";
import { DishTemplateWhereUniqueInput } from "../../dishTemplate/inputs/DishTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishTemplateUpdateManyWithoutRecipeNestedInput', { isAbstract: true })
export class DishTemplateUpdateManyWithoutRecipeNestedInput {
  @NestJsGraphQL.Field(() => [DishTemplateCreateWithoutRecipeInput], { nullable: true })
  create?: DishTemplateCreateWithoutRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateCreateOrConnectWithoutRecipeInput], { nullable: true })
  connectOrCreate?: DishTemplateCreateOrConnectWithoutRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateUpsertWithWhereUniqueWithoutRecipeInput], { nullable: true })
  upsert?: DishTemplateUpsertWithWhereUniqueWithoutRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => DishTemplateCreateManyRecipeInputEnvelope, { nullable: true })
  createMany?: DishTemplateCreateManyRecipeInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
  set?: DishTemplateWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
  disconnect?: DishTemplateWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
  delete?: DishTemplateWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
  connect?: DishTemplateWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateUpdateWithWhereUniqueWithoutRecipeInput], { nullable: true })
  update?: DishTemplateUpdateWithWhereUniqueWithoutRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateUpdateManyWithWhereWithoutRecipeInput], { nullable: true })
  updateMany?: DishTemplateUpdateManyWithWhereWithoutRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateScalarWhereInput], { nullable: true })
  deleteMany?: DishTemplateScalarWhereInput[] | undefined;
}
