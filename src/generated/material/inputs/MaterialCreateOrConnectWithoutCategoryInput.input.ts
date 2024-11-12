import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateWithoutCategoryInput } from "../../material/inputs/MaterialCreateWithoutCategoryInput.input";
import { MaterialWhereUniqueInput } from "../../material/inputs/MaterialWhereUniqueInput.input";

@NestJsGraphQL.InputType('MaterialCreateOrConnectWithoutCategoryInput', { isAbstract: true })
export class MaterialCreateOrConnectWithoutCategoryInput {
  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput)
  where!: MaterialWhereUniqueInput;

  @NestJsGraphQL.Field(() => MaterialCreateWithoutCategoryInput)
  create!: MaterialCreateWithoutCategoryInput;
}
