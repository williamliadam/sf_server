import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateWhereInput } from "../../dishTemplate/inputs/DishTemplateWhereInput.input";

@NestJsGraphQL.InputType('DishTemplateListRelationFilter', { isAbstract: true })
export class DishTemplateListRelationFilter {
  @NestJsGraphQL.Field(() => DishTemplateWhereInput, { nullable: true })
  every?: DishTemplateWhereInput | undefined;

  @NestJsGraphQL.Field(() => DishTemplateWhereInput, { nullable: true })
  some?: DishTemplateWhereInput | undefined;

  @NestJsGraphQL.Field(() => DishTemplateWhereInput, { nullable: true })
  none?: DishTemplateWhereInput | undefined;
}
