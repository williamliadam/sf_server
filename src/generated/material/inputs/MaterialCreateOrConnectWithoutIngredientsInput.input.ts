import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateWithoutIngredientsInput } from "../../material/inputs/MaterialCreateWithoutIngredientsInput.input";
import { MaterialWhereUniqueInput } from "../../material/inputs/MaterialWhereUniqueInput.input";

@NestJsGraphQL.InputType('MaterialCreateOrConnectWithoutIngredientsInput', { isAbstract: true })
export class MaterialCreateOrConnectWithoutIngredientsInput {
  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput)
  where!: MaterialWhereUniqueInput;

  @NestJsGraphQL.Field(() => MaterialCreateWithoutIngredientsInput)
  create!: MaterialCreateWithoutIngredientsInput;
}
