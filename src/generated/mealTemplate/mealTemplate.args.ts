import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateScalarFieldEnum } from "../common/enums";
import { MealTemplateCreateInput } from "../mealTemplate/inputs/MealTemplateCreateInput.input";
import { MealTemplateCreateManyInput } from "../mealTemplate/inputs/MealTemplateCreateManyInput.input";
import { MealTemplateOrderByWithAggregationInput } from "../mealTemplate/inputs/MealTemplateOrderByWithAggregationInput.input";
import { MealTemplateOrderByWithRelationInput } from "../mealTemplate/inputs/MealTemplateOrderByWithRelationInput.input";
import { MealTemplateScalarWhereWithAggregatesInput } from "../mealTemplate/inputs/MealTemplateScalarWhereWithAggregatesInput.input";
import { MealTemplateUpdateInput } from "../mealTemplate/inputs/MealTemplateUpdateInput.input";
import { MealTemplateUpdateManyMutationInput } from "../mealTemplate/inputs/MealTemplateUpdateManyMutationInput.input";
import { MealTemplateWhereInput } from "../mealTemplate/inputs/MealTemplateWhereInput.input";
import { MealTemplateWhereUniqueInput } from "../mealTemplate/inputs/MealTemplateWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateMealTemplateArgs {
  @NestJsGraphQL.Field(() => MealTemplateWhereInput, { nullable: true })
  where?: MealTemplateWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateOrderByWithRelationInput], { nullable: true })
  orderBy?: MealTemplateOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MealTemplateWhereUniqueInput, { nullable: true })
  cursor?: MealTemplateWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyMealTemplateArgs {
  @NestJsGraphQL.Field(() => [MealTemplateCreateManyInput])
  data!: MealTemplateCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneMealTemplateArgs {
  @NestJsGraphQL.Field(() => MealTemplateCreateInput)
  data!: MealTemplateCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyMealTemplateArgs {
  @NestJsGraphQL.Field(() => MealTemplateWhereInput, { nullable: true })
  where?: MealTemplateWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneMealTemplateArgs {
  @NestJsGraphQL.Field(() => MealTemplateWhereUniqueInput)
  where!: MealTemplateWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstMealTemplateArgs {
  @NestJsGraphQL.Field(() => MealTemplateWhereInput, { nullable: true })
  where?: MealTemplateWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateOrderByWithRelationInput], { nullable: true })
  orderBy?: MealTemplateOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MealTemplateWhereUniqueInput, { nullable: true })
  cursor?: MealTemplateWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "userId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyMealTemplateArgs {
  @NestJsGraphQL.Field(() => MealTemplateWhereInput, { nullable: true })
  where?: MealTemplateWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateOrderByWithRelationInput], { nullable: true })
  orderBy?: MealTemplateOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MealTemplateWhereUniqueInput, { nullable: true })
  cursor?: MealTemplateWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "userId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueMealTemplateArgs {
  @NestJsGraphQL.Field(() => MealTemplateWhereUniqueInput)
  where!: MealTemplateWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByMealTemplateArgs {
  @NestJsGraphQL.Field(() => MealTemplateWhereInput, { nullable: true })
  where?: MealTemplateWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateOrderByWithAggregationInput], { nullable: true })
  orderBy?: MealTemplateOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateScalarFieldEnum])
  by!: Array<"id" | "name" | "userId" | "createdAt" | "updatedAt">;

  @NestJsGraphQL.Field(() => MealTemplateScalarWhereWithAggregatesInput, { nullable: true })
  having?: MealTemplateScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyMealTemplateArgs {
  @NestJsGraphQL.Field(() => MealTemplateUpdateManyMutationInput)
  data!: MealTemplateUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => MealTemplateWhereInput, { nullable: true })
  where?: MealTemplateWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneMealTemplateArgs {
  @NestJsGraphQL.Field(() => MealTemplateUpdateInput)
  data!: MealTemplateUpdateInput;

  @NestJsGraphQL.Field(() => MealTemplateWhereUniqueInput)
  where!: MealTemplateWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneMealTemplateArgs {
  @NestJsGraphQL.Field(() => MealTemplateWhereUniqueInput)
  where!: MealTemplateWhereUniqueInput;

  @NestJsGraphQL.Field(() => MealTemplateCreateInput)
  create!: MealTemplateCreateInput;

  @NestJsGraphQL.Field(() => MealTemplateUpdateInput)
  update!: MealTemplateUpdateInput;
}
