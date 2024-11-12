import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateManyCategoryInputEnvelope } from "../../material/inputs/MaterialCreateManyCategoryInputEnvelope.input";
import { MaterialCreateOrConnectWithoutCategoryInput } from "../../material/inputs/MaterialCreateOrConnectWithoutCategoryInput.input";
import { MaterialCreateWithoutCategoryInput } from "../../material/inputs/MaterialCreateWithoutCategoryInput.input";
import { MaterialWhereUniqueInput } from "../../material/inputs/MaterialWhereUniqueInput.input";

@NestJsGraphQL.InputType('MaterialCreateNestedManyWithoutCategoryInput', { isAbstract: true })
export class MaterialCreateNestedManyWithoutCategoryInput {
  @NestJsGraphQL.Field(() => [MaterialCreateWithoutCategoryInput], { nullable: true })
  create?: MaterialCreateWithoutCategoryInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialCreateOrConnectWithoutCategoryInput], { nullable: true })
  connectOrCreate?: MaterialCreateOrConnectWithoutCategoryInput[] | undefined;

  @NestJsGraphQL.Field(() => MaterialCreateManyCategoryInputEnvelope, { nullable: true })
  createMany?: MaterialCreateManyCategoryInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [MaterialWhereUniqueInput], { nullable: true })
  connect?: MaterialWhereUniqueInput[] | undefined;
}
