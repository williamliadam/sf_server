import * as NestJsGraphQL from "@nestjs/graphql";
import { MethodCreateManyUsedRecipeInputEnvelope } from "../../method/inputs/MethodCreateManyUsedRecipeInputEnvelope.input";
import { MethodCreateOrConnectWithoutUsedRecipeInput } from "../../method/inputs/MethodCreateOrConnectWithoutUsedRecipeInput.input";
import { MethodCreateWithoutUsedRecipeInput } from "../../method/inputs/MethodCreateWithoutUsedRecipeInput.input";
import { MethodWhereUniqueInput } from "../../method/inputs/MethodWhereUniqueInput.input";

@NestJsGraphQL.InputType('MethodCreateNestedManyWithoutUsedRecipeInput', { isAbstract: true })
export class MethodCreateNestedManyWithoutUsedRecipeInput {
  @NestJsGraphQL.Field(() => [MethodCreateWithoutUsedRecipeInput], { nullable: true })
  create?: MethodCreateWithoutUsedRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [MethodCreateOrConnectWithoutUsedRecipeInput], { nullable: true })
  connectOrCreate?: MethodCreateOrConnectWithoutUsedRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => MethodCreateManyUsedRecipeInputEnvelope, { nullable: true })
  createMany?: MethodCreateManyUsedRecipeInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [MethodWhereUniqueInput], { nullable: true })
  connect?: MethodWhereUniqueInput[] | undefined;
}
