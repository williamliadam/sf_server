import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialCreateManyCategoryInput } from "../../material/inputs/MaterialCreateManyCategoryInput.input";

@NestJsGraphQL.InputType('MaterialCreateManyCategoryInputEnvelope', { isAbstract: true })
export class MaterialCreateManyCategoryInputEnvelope {
  @NestJsGraphQL.Field(() => [MaterialCreateManyCategoryInput])
  data!: MaterialCreateManyCategoryInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
