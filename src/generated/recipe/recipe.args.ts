import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeScalarFieldEnum } from "../common/enums";
import { RecipeCreateInput } from "../recipe/inputs/RecipeCreateInput.input";
import { RecipeCreateManyInput } from "../recipe/inputs/RecipeCreateManyInput.input";
import { RecipeOrderByWithAggregationInput } from "../recipe/inputs/RecipeOrderByWithAggregationInput.input";
import { RecipeOrderByWithRelationInput } from "../recipe/inputs/RecipeOrderByWithRelationInput.input";
import { RecipeScalarWhereWithAggregatesInput } from "../recipe/inputs/RecipeScalarWhereWithAggregatesInput.input";
import { RecipeUpdateInput } from "../recipe/inputs/RecipeUpdateInput.input";
import { RecipeUpdateManyMutationInput } from "../recipe/inputs/RecipeUpdateManyMutationInput.input";
import { RecipeWhereInput } from "../recipe/inputs/RecipeWhereInput.input";
import { RecipeWhereUniqueInput } from "../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateRecipeArgs {
  @NestJsGraphQL.Field(() => RecipeWhereInput, { nullable: true })
  where?: RecipeWhereInput | undefined;

  @NestJsGraphQL.Field(() => [RecipeOrderByWithRelationInput], { nullable: true })
  orderBy?: RecipeOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput, { nullable: true })
  cursor?: RecipeWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyRecipeArgs {
  @NestJsGraphQL.Field(() => [RecipeCreateManyInput])
  data!: RecipeCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneRecipeArgs {
  @NestJsGraphQL.Field(() => RecipeCreateInput)
  data!: RecipeCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyRecipeArgs {
  @NestJsGraphQL.Field(() => RecipeWhereInput, { nullable: true })
  where?: RecipeWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneRecipeArgs {
  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput)
  where!: RecipeWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstRecipeArgs {
  @NestJsGraphQL.Field(() => RecipeWhereInput, { nullable: true })
  where?: RecipeWhereInput | undefined;

  @NestJsGraphQL.Field(() => [RecipeOrderByWithRelationInput], { nullable: true })
  orderBy?: RecipeOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput, { nullable: true })
  cursor?: RecipeWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [RecipeScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "stars" | "authorId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyRecipeArgs {
  @NestJsGraphQL.Field(() => RecipeWhereInput, { nullable: true })
  where?: RecipeWhereInput | undefined;

  @NestJsGraphQL.Field(() => [RecipeOrderByWithRelationInput], { nullable: true })
  orderBy?: RecipeOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput, { nullable: true })
  cursor?: RecipeWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [RecipeScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "stars" | "authorId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueRecipeArgs {
  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput)
  where!: RecipeWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByRecipeArgs {
  @NestJsGraphQL.Field(() => RecipeWhereInput, { nullable: true })
  where?: RecipeWhereInput | undefined;

  @NestJsGraphQL.Field(() => [RecipeOrderByWithAggregationInput], { nullable: true })
  orderBy?: RecipeOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeScalarFieldEnum])
  by!: Array<"id" | "name" | "stars" | "authorId" | "createdAt" | "updatedAt">;

  @NestJsGraphQL.Field(() => RecipeScalarWhereWithAggregatesInput, { nullable: true })
  having?: RecipeScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyRecipeArgs {
  @NestJsGraphQL.Field(() => RecipeUpdateManyMutationInput)
  data!: RecipeUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => RecipeWhereInput, { nullable: true })
  where?: RecipeWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneRecipeArgs {
  @NestJsGraphQL.Field(() => RecipeUpdateInput)
  data!: RecipeUpdateInput;

  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput)
  where!: RecipeWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneRecipeArgs {
  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput)
  where!: RecipeWhereUniqueInput;

  @NestJsGraphQL.Field(() => RecipeCreateInput)
  create!: RecipeCreateInput;

  @NestJsGraphQL.Field(() => RecipeUpdateInput)
  update!: RecipeUpdateInput;
}
