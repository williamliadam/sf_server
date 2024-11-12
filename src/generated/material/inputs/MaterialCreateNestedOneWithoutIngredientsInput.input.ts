import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateOrConnectWithoutIngredientsInput } from "../../material/inputs/MaterialCreateOrConnectWithoutIngredientsInput.input";
import { MaterialCreateWithoutIngredientsInput } from "../../material/inputs/MaterialCreateWithoutIngredientsInput.input";
import { MaterialWhereUniqueInput } from "../../material/inputs/MaterialWhereUniqueInput.input";

@NestJsGraphQL.InputType('MaterialCreateNestedOneWithoutIngredientsInput', { isAbstract: true })
export class MaterialCreateNestedOneWithoutIngredientsInput {
  @NestJsGraphQL.Field(() => MaterialCreateWithoutIngredientsInput, { nullable: true })
  create?: MaterialCreateWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => MaterialCreateOrConnectWithoutIngredientsInput, { nullable: true })
  connectOrCreate?: MaterialCreateOrConnectWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput, { nullable: true })
  connect?: MaterialWhereUniqueInput | undefined;
}
