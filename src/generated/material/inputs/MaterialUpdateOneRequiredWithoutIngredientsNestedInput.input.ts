import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateOrConnectWithoutIngredientsInput } from "../../material/inputs/MaterialCreateOrConnectWithoutIngredientsInput.input";
import { MaterialCreateWithoutIngredientsInput } from "../../material/inputs/MaterialCreateWithoutIngredientsInput.input";
import { MaterialUpdateWithoutIngredientsInput } from "../../material/inputs/MaterialUpdateWithoutIngredientsInput.input";
import { MaterialUpsertWithoutIngredientsInput } from "../../material/inputs/MaterialUpsertWithoutIngredientsInput.input";
import { MaterialWhereUniqueInput } from "../../material/inputs/MaterialWhereUniqueInput.input";

@NestJsGraphQL.InputType('MaterialUpdateOneRequiredWithoutIngredientsNestedInput', { isAbstract: true })
export class MaterialUpdateOneRequiredWithoutIngredientsNestedInput {
  @NestJsGraphQL.Field(() => MaterialCreateWithoutIngredientsInput, { nullable: true })
  create?: MaterialCreateWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => MaterialCreateOrConnectWithoutIngredientsInput, { nullable: true })
  connectOrCreate?: MaterialCreateOrConnectWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => MaterialUpsertWithoutIngredientsInput, { nullable: true })
  upsert?: MaterialUpsertWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput, { nullable: true })
  connect?: MaterialWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => MaterialUpdateWithoutIngredientsInput, { nullable: true })
  update?: MaterialUpdateWithoutIngredientsInput | undefined;
}
