import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateNestedOneWithoutMaterialsInput } from "../../materiaCategory/inputs/MateriaCategoryCreateNestedOneWithoutMaterialsInput.input";
import { NutritionRowCreateNestedManyWithoutBelongMaterialInput } from "../../nutritionRow/inputs/NutritionRowCreateNestedManyWithoutBelongMaterialInput.input";

@NestJsGraphQL.InputType('MaterialCreateWithoutIngredientsInput', { isAbstract: true })
export class MaterialCreateWithoutIngredientsInput {
  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  nickName!: string;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateNestedOneWithoutMaterialsInput)
  category!: MateriaCategoryCreateNestedOneWithoutMaterialsInput;

  @NestJsGraphQL.Field(() => NutritionRowCreateNestedManyWithoutBelongMaterialInput, { nullable: true })
  nutritionMatrix?: NutritionRowCreateNestedManyWithoutBelongMaterialInput | undefined;
}
