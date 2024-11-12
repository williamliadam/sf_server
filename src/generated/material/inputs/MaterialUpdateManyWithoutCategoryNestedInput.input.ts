import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateManyCategoryInputEnvelope } from "../../material/inputs/MaterialCreateManyCategoryInputEnvelope.input";
import { MaterialCreateOrConnectWithoutCategoryInput } from "../../material/inputs/MaterialCreateOrConnectWithoutCategoryInput.input";
import { MaterialCreateWithoutCategoryInput } from "../../material/inputs/MaterialCreateWithoutCategoryInput.input";
import { MaterialScalarWhereInput } from "../../material/inputs/MaterialScalarWhereInput.input";
import { MaterialUpdateManyWithWhereWithoutCategoryInput } from "../../material/inputs/MaterialUpdateManyWithWhereWithoutCategoryInput.input";
import { MaterialUpdateWithWhereUniqueWithoutCategoryInput } from "../../material/inputs/MaterialUpdateWithWhereUniqueWithoutCategoryInput.input";
import { MaterialUpsertWithWhereUniqueWithoutCategoryInput } from "../../material/inputs/MaterialUpsertWithWhereUniqueWithoutCategoryInput.input";
import { MaterialWhereUniqueInput } from "../../material/inputs/MaterialWhereUniqueInput.input";

@NestJsGraphQL.InputType('MaterialUpdateManyWithoutCategoryNestedInput', { isAbstract: true })
export class MaterialUpdateManyWithoutCategoryNestedInput {
  @NestJsGraphQL.Field(() => [MaterialCreateWithoutCategoryInput], { nullable: true })
  create?: MaterialCreateWithoutCategoryInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialCreateOrConnectWithoutCategoryInput], { nullable: true })
  connectOrCreate?: MaterialCreateOrConnectWithoutCategoryInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialUpsertWithWhereUniqueWithoutCategoryInput], { nullable: true })
  upsert?: MaterialUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @NestJsGraphQL.Field(() => MaterialCreateManyCategoryInputEnvelope, { nullable: true })
  createMany?: MaterialCreateManyCategoryInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [MaterialWhereUniqueInput], { nullable: true })
  set?: MaterialWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialWhereUniqueInput], { nullable: true })
  disconnect?: MaterialWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialWhereUniqueInput], { nullable: true })
  delete?: MaterialWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialWhereUniqueInput], { nullable: true })
  connect?: MaterialWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialUpdateWithWhereUniqueWithoutCategoryInput], { nullable: true })
  update?: MaterialUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialUpdateManyWithWhereWithoutCategoryInput], { nullable: true })
  updateMany?: MaterialUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialScalarWhereInput], { nullable: true })
  deleteMany?: MaterialScalarWhereInput[] | undefined;
}
