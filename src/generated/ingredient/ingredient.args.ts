import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientScalarFieldEnum } from "../common/enums";
import { IngredientCreateInput } from "../ingredient/inputs/IngredientCreateInput.input";
import { IngredientCreateManyInput } from "../ingredient/inputs/IngredientCreateManyInput.input";
import { IngredientOrderByWithAggregationInput } from "../ingredient/inputs/IngredientOrderByWithAggregationInput.input";
import { IngredientOrderByWithRelationInput } from "../ingredient/inputs/IngredientOrderByWithRelationInput.input";
import { IngredientScalarWhereWithAggregatesInput } from "../ingredient/inputs/IngredientScalarWhereWithAggregatesInput.input";
import { IngredientUpdateInput } from "../ingredient/inputs/IngredientUpdateInput.input";
import { IngredientUpdateManyMutationInput } from "../ingredient/inputs/IngredientUpdateManyMutationInput.input";
import { IngredientWhereInput } from "../ingredient/inputs/IngredientWhereInput.input";
import { IngredientWhereUniqueInput } from "../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateIngredientArgs {
  @NestJsGraphQL.Field(() => IngredientWhereInput, { nullable: true })
  where?: IngredientWhereInput | undefined;

  @NestJsGraphQL.Field(() => [IngredientOrderByWithRelationInput], { nullable: true })
  orderBy?: IngredientOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput, { nullable: true })
  cursor?: IngredientWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyIngredientArgs {
  @NestJsGraphQL.Field(() => [IngredientCreateManyInput])
  data!: IngredientCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneIngredientArgs {
  @NestJsGraphQL.Field(() => IngredientCreateInput)
  data!: IngredientCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyIngredientArgs {
  @NestJsGraphQL.Field(() => IngredientWhereInput, { nullable: true })
  where?: IngredientWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneIngredientArgs {
  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput)
  where!: IngredientWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstIngredientArgs {
  @NestJsGraphQL.Field(() => IngredientWhereInput, { nullable: true })
  where?: IngredientWhereInput | undefined;

  @NestJsGraphQL.Field(() => [IngredientOrderByWithRelationInput], { nullable: true })
  orderBy?: IngredientOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput, { nullable: true })
  cursor?: IngredientWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [IngredientScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "materialId" | "amount" | "materiaUnitId" | "recipeId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyIngredientArgs {
  @NestJsGraphQL.Field(() => IngredientWhereInput, { nullable: true })
  where?: IngredientWhereInput | undefined;

  @NestJsGraphQL.Field(() => [IngredientOrderByWithRelationInput], { nullable: true })
  orderBy?: IngredientOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput, { nullable: true })
  cursor?: IngredientWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [IngredientScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "materialId" | "amount" | "materiaUnitId" | "recipeId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueIngredientArgs {
  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput)
  where!: IngredientWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByIngredientArgs {
  @NestJsGraphQL.Field(() => IngredientWhereInput, { nullable: true })
  where?: IngredientWhereInput | undefined;

  @NestJsGraphQL.Field(() => [IngredientOrderByWithAggregationInput], { nullable: true })
  orderBy?: IngredientOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientScalarFieldEnum])
  by!: Array<"id" | "materialId" | "amount" | "materiaUnitId" | "recipeId" | "createdAt" | "updatedAt">;

  @NestJsGraphQL.Field(() => IngredientScalarWhereWithAggregatesInput, { nullable: true })
  having?: IngredientScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyIngredientArgs {
  @NestJsGraphQL.Field(() => IngredientUpdateManyMutationInput)
  data!: IngredientUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => IngredientWhereInput, { nullable: true })
  where?: IngredientWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneIngredientArgs {
  @NestJsGraphQL.Field(() => IngredientUpdateInput)
  data!: IngredientUpdateInput;

  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput)
  where!: IngredientWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneIngredientArgs {
  @NestJsGraphQL.Field(() => IngredientWhereUniqueInput)
  where!: IngredientWhereUniqueInput;

  @NestJsGraphQL.Field(() => IngredientCreateInput)
  create!: IngredientCreateInput;

  @NestJsGraphQL.Field(() => IngredientUpdateInput)
  update!: IngredientUpdateInput;
}
