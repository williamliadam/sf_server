import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateManyLastInput } from "../../materiaCategory/inputs/MateriaCategoryCreateManyLastInput.input";

@NestJsGraphQL.InputType('MateriaCategoryCreateManyLastInputEnvelope', { isAbstract: true })
export class MateriaCategoryCreateManyLastInputEnvelope {
  @NestJsGraphQL.Field(() => [MateriaCategoryCreateManyLastInput])
  data!: MateriaCategoryCreateManyLastInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
