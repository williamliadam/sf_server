import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialUpdateWithoutCategoryInput } from "../../material/inputs/MaterialUpdateWithoutCategoryInput.input";
import { MaterialWhereUniqueInput } from "../../material/inputs/MaterialWhereUniqueInput.input";

@NestJsGraphQL.InputType('MaterialUpdateWithWhereUniqueWithoutCategoryInput', { isAbstract: true })
export class MaterialUpdateWithWhereUniqueWithoutCategoryInput {
  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput)
  where!: MaterialWhereUniqueInput;

  @NestJsGraphQL.Field(() => MaterialUpdateWithoutCategoryInput)
  data!: MaterialUpdateWithoutCategoryInput;
}
