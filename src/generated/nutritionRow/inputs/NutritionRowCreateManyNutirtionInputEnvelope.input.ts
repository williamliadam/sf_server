import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowCreateManyNutirtionInput } from "../../nutritionRow/inputs/NutritionRowCreateManyNutirtionInput.input";

@NestJsGraphQL.InputType('NutritionRowCreateManyNutirtionInputEnvelope', { isAbstract: true })
export class NutritionRowCreateManyNutirtionInputEnvelope {
  @NestJsGraphQL.Field(() => [NutritionRowCreateManyNutirtionInput])
  data!: NutritionRowCreateManyNutirtionInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
