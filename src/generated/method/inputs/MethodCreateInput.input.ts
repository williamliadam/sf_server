import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateNestedOneWithoutMethodsInput } from "../../recipe/inputs/RecipeCreateNestedOneWithoutMethodsInput.input";

@NestJsGraphQL.InputType('MethodCreateInput', { isAbstract: true })
export class MethodCreateInput {
  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  desc!: string;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => RecipeCreateNestedOneWithoutMethodsInput, { nullable: true })
  usedRecipe?: RecipeCreateNestedOneWithoutMethodsInput | undefined;
}
