import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateManyAuthorInput } from "../../recipe/inputs/RecipeCreateManyAuthorInput.input";

@NestJsGraphQL.InputType('RecipeCreateManyAuthorInputEnvelope', { isAbstract: true })
export class RecipeCreateManyAuthorInputEnvelope {
  @NestJsGraphQL.Field(() => [RecipeCreateManyAuthorInput])
  data!: RecipeCreateManyAuthorInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
