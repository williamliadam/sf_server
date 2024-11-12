import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateScalarFieldEnum } from "../common/enums";
import { DishTemplateCreateInput } from "../dishTemplate/inputs/DishTemplateCreateInput.input";
import { DishTemplateCreateManyInput } from "../dishTemplate/inputs/DishTemplateCreateManyInput.input";
import { DishTemplateOrderByWithAggregationInput } from "../dishTemplate/inputs/DishTemplateOrderByWithAggregationInput.input";
import { DishTemplateOrderByWithRelationInput } from "../dishTemplate/inputs/DishTemplateOrderByWithRelationInput.input";
import { DishTemplateScalarWhereWithAggregatesInput } from "../dishTemplate/inputs/DishTemplateScalarWhereWithAggregatesInput.input";
import { DishTemplateUpdateInput } from "../dishTemplate/inputs/DishTemplateUpdateInput.input";
import { DishTemplateUpdateManyMutationInput } from "../dishTemplate/inputs/DishTemplateUpdateManyMutationInput.input";
import { DishTemplateWhereInput } from "../dishTemplate/inputs/DishTemplateWhereInput.input";
import { DishTemplateWhereUniqueInput } from "../dishTemplate/inputs/DishTemplateWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateDishTemplateArgs {
  @NestJsGraphQL.Field(() => DishTemplateWhereInput, { nullable: true })
  where?: DishTemplateWhereInput | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateOrderByWithRelationInput], { nullable: true })
  orderBy?: DishTemplateOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => DishTemplateWhereUniqueInput, { nullable: true })
  cursor?: DishTemplateWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyDishTemplateArgs {
  @NestJsGraphQL.Field(() => [DishTemplateCreateManyInput])
  data!: DishTemplateCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneDishTemplateArgs {
  @NestJsGraphQL.Field(() => DishTemplateCreateInput)
  data!: DishTemplateCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyDishTemplateArgs {
  @NestJsGraphQL.Field(() => DishTemplateWhereInput, { nullable: true })
  where?: DishTemplateWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneDishTemplateArgs {
  @NestJsGraphQL.Field(() => DishTemplateWhereUniqueInput)
  where!: DishTemplateWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstDishTemplateArgs {
  @NestJsGraphQL.Field(() => DishTemplateWhereInput, { nullable: true })
  where?: DishTemplateWhereInput | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateOrderByWithRelationInput], { nullable: true })
  orderBy?: DishTemplateOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => DishTemplateWhereUniqueInput, { nullable: true })
  cursor?: DishTemplateWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "recipeId" | "amount" | "createdAt" | "updatedAt" | "mealTemplateId"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyDishTemplateArgs {
  @NestJsGraphQL.Field(() => DishTemplateWhereInput, { nullable: true })
  where?: DishTemplateWhereInput | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateOrderByWithRelationInput], { nullable: true })
  orderBy?: DishTemplateOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => DishTemplateWhereUniqueInput, { nullable: true })
  cursor?: DishTemplateWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "recipeId" | "amount" | "createdAt" | "updatedAt" | "mealTemplateId"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueDishTemplateArgs {
  @NestJsGraphQL.Field(() => DishTemplateWhereUniqueInput)
  where!: DishTemplateWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByDishTemplateArgs {
  @NestJsGraphQL.Field(() => DishTemplateWhereInput, { nullable: true })
  where?: DishTemplateWhereInput | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateOrderByWithAggregationInput], { nullable: true })
  orderBy?: DishTemplateOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateScalarFieldEnum])
  by!: Array<"id" | "recipeId" | "amount" | "createdAt" | "updatedAt" | "mealTemplateId">;

  @NestJsGraphQL.Field(() => DishTemplateScalarWhereWithAggregatesInput, { nullable: true })
  having?: DishTemplateScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyDishTemplateArgs {
  @NestJsGraphQL.Field(() => DishTemplateUpdateManyMutationInput)
  data!: DishTemplateUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => DishTemplateWhereInput, { nullable: true })
  where?: DishTemplateWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneDishTemplateArgs {
  @NestJsGraphQL.Field(() => DishTemplateUpdateInput)
  data!: DishTemplateUpdateInput;

  @NestJsGraphQL.Field(() => DishTemplateWhereUniqueInput)
  where!: DishTemplateWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneDishTemplateArgs {
  @NestJsGraphQL.Field(() => DishTemplateWhereUniqueInput)
  where!: DishTemplateWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishTemplateCreateInput)
  create!: DishTemplateCreateInput;

  @NestJsGraphQL.Field(() => DishTemplateUpdateInput)
  update!: DishTemplateUpdateInput;
}
