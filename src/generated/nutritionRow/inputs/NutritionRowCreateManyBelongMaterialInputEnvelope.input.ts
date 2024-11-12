import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowCreateManyBelongMaterialInput } from "../../nutritionRow/inputs/NutritionRowCreateManyBelongMaterialInput.input";

@NestJsGraphQL.InputType('NutritionRowCreateManyBelongMaterialInputEnvelope', { isAbstract: true })
export class NutritionRowCreateManyBelongMaterialInputEnvelope {
  @NestJsGraphQL.Field(() => [NutritionRowCreateManyBelongMaterialInput])
  data!: NutritionRowCreateManyBelongMaterialInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
