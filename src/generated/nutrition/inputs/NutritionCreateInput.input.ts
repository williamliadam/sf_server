import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowCreateNestedManyWithoutNutirtionInput } from "../../nutritionRow/inputs/NutritionRowCreateNestedManyWithoutNutirtionInput.input";

@NestJsGraphQL.InputType('NutritionCreateInput', { isAbstract: true })
export class NutritionCreateInput {
  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => NutritionRowCreateNestedManyWithoutNutirtionInput, { nullable: true })
  usedRow?: NutritionRowCreateNestedManyWithoutNutirtionInput | undefined;
}
