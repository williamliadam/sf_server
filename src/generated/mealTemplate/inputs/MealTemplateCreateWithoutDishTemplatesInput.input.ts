import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateNestedOneWithoutMyMealTemplatesInput } from "../../user/inputs/UserCreateNestedOneWithoutMyMealTemplatesInput.input";

@NestJsGraphQL.InputType('MealTemplateCreateWithoutDishTemplatesInput', { isAbstract: true })
export class MealTemplateCreateWithoutDishTemplatesInput {
  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => UserCreateNestedOneWithoutMyMealTemplatesInput)
  createBy!: UserCreateNestedOneWithoutMyMealTemplatesInput;
}
