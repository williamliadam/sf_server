import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateWithoutCategoryInput } from "../../material/inputs/MaterialCreateWithoutCategoryInput.input";
import { MaterialUpdateWithoutCategoryInput } from "../../material/inputs/MaterialUpdateWithoutCategoryInput.input";
import { MaterialWhereUniqueInput } from "../../material/inputs/MaterialWhereUniqueInput.input";

@NestJsGraphQL.InputType('MaterialUpsertWithWhereUniqueWithoutCategoryInput', { isAbstract: true })
export class MaterialUpsertWithWhereUniqueWithoutCategoryInput {
  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput)
  where!: MaterialWhereUniqueInput;

  @NestJsGraphQL.Field(() => MaterialUpdateWithoutCategoryInput)
  update!: MaterialUpdateWithoutCategoryInput;

  @NestJsGraphQL.Field(() => MaterialCreateWithoutCategoryInput)
  create!: MaterialCreateWithoutCategoryInput;
}
