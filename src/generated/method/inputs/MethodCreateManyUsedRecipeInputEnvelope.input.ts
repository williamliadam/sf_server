import * as NestJsGraphQL from "@nestjs/graphql";
import { MethodCreateManyUsedRecipeInput } from "../../method/inputs/MethodCreateManyUsedRecipeInput.input";

@NestJsGraphQL.InputType('MethodCreateManyUsedRecipeInputEnvelope', { isAbstract: true })
export class MethodCreateManyUsedRecipeInputEnvelope {
  @NestJsGraphQL.Field(() => [MethodCreateManyUsedRecipeInput])
  data!: MethodCreateManyUsedRecipeInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
