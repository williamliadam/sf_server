import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowScalarFieldEnum, NutritionScalarFieldEnum } from "../common/enums";
import { NutritionCreateInput } from "../nutrition/inputs/NutritionCreateInput.input";
import { NutritionCreateManyInput } from "../nutrition/inputs/NutritionCreateManyInput.input";
import { NutritionOrderByWithAggregationInput } from "../nutrition/inputs/NutritionOrderByWithAggregationInput.input";
import { NutritionOrderByWithRelationInput } from "../nutrition/inputs/NutritionOrderByWithRelationInput.input";
import { NutritionRowCreateInput } from "../nutrition/inputs/NutritionRowCreateInput.input";
import { NutritionRowCreateManyInput } from "../nutrition/inputs/NutritionRowCreateManyInput.input";
import { NutritionRowOrderByWithAggregationInput } from "../nutrition/inputs/NutritionRowOrderByWithAggregationInput.input";
import { NutritionRowOrderByWithRelationInput } from "../nutrition/inputs/NutritionRowOrderByWithRelationInput.input";
import { NutritionRowScalarWhereWithAggregatesInput } from "../nutrition/inputs/NutritionRowScalarWhereWithAggregatesInput.input";
import { NutritionRowUpdateInput } from "../nutrition/inputs/NutritionRowUpdateInput.input";
import { NutritionRowUpdateManyMutationInput } from "../nutrition/inputs/NutritionRowUpdateManyMutationInput.input";
import { NutritionRowWhereInput } from "../nutrition/inputs/NutritionRowWhereInput.input";
import { NutritionRowWhereUniqueInput } from "../nutrition/inputs/NutritionRowWhereUniqueInput.input";
import { NutritionScalarWhereWithAggregatesInput } from "../nutrition/inputs/NutritionScalarWhereWithAggregatesInput.input";
import { NutritionUpdateInput } from "../nutrition/inputs/NutritionUpdateInput.input";
import { NutritionUpdateManyMutationInput } from "../nutrition/inputs/NutritionUpdateManyMutationInput.input";
import { NutritionWhereInput } from "../nutrition/inputs/NutritionWhereInput.input";
import { NutritionWhereUniqueInput } from "../nutrition/inputs/NutritionWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateNutritionArgs {
  @NestJsGraphQL.Field(() => NutritionWhereInput, { nullable: true })
  where?: NutritionWhereInput | undefined;

  @NestJsGraphQL.Field(() => [NutritionOrderByWithRelationInput], { nullable: true })
  orderBy?: NutritionOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => NutritionWhereUniqueInput, { nullable: true })
  cursor?: NutritionWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyNutritionArgs {
  @NestJsGraphQL.Field(() => [NutritionCreateManyInput])
  data!: NutritionCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneNutritionArgs {
  @NestJsGraphQL.Field(() => NutritionCreateInput)
  data!: NutritionCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyNutritionArgs {
  @NestJsGraphQL.Field(() => NutritionWhereInput, { nullable: true })
  where?: NutritionWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneNutritionArgs {
  @NestJsGraphQL.Field(() => NutritionWhereUniqueInput)
  where!: NutritionWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstNutritionArgs {
  @NestJsGraphQL.Field(() => NutritionWhereInput, { nullable: true })
  where?: NutritionWhereInput | undefined;

  @NestJsGraphQL.Field(() => [NutritionOrderByWithRelationInput], { nullable: true })
  orderBy?: NutritionOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => NutritionWhereUniqueInput, { nullable: true })
  cursor?: NutritionWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [NutritionScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "code" | "name" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyNutritionArgs {
  @NestJsGraphQL.Field(() => NutritionWhereInput, { nullable: true })
  where?: NutritionWhereInput | undefined;

  @NestJsGraphQL.Field(() => [NutritionOrderByWithRelationInput], { nullable: true })
  orderBy?: NutritionOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => NutritionWhereUniqueInput, { nullable: true })
  cursor?: NutritionWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [NutritionScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "code" | "name" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueNutritionArgs {
  @NestJsGraphQL.Field(() => NutritionWhereUniqueInput)
  where!: NutritionWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByNutritionArgs {
  @NestJsGraphQL.Field(() => NutritionWhereInput, { nullable: true })
  where?: NutritionWhereInput | undefined;

  @NestJsGraphQL.Field(() => [NutritionOrderByWithAggregationInput], { nullable: true })
  orderBy?: NutritionOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionScalarFieldEnum])
  by!: Array<"id" | "code" | "name" | "createdAt" | "updatedAt">;

  @NestJsGraphQL.Field(() => NutritionScalarWhereWithAggregatesInput, { nullable: true })
  having?: NutritionScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyNutritionArgs {
  @NestJsGraphQL.Field(() => NutritionUpdateManyMutationInput)
  data!: NutritionUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => NutritionWhereInput, { nullable: true })
  where?: NutritionWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneNutritionArgs {
  @NestJsGraphQL.Field(() => NutritionUpdateInput)
  data!: NutritionUpdateInput;

  @NestJsGraphQL.Field(() => NutritionWhereUniqueInput)
  where!: NutritionWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneNutritionArgs {
  @NestJsGraphQL.Field(() => NutritionWhereUniqueInput)
  where!: NutritionWhereUniqueInput;

  @NestJsGraphQL.Field(() => NutritionCreateInput)
  create!: NutritionCreateInput;

  @NestJsGraphQL.Field(() => NutritionUpdateInput)
  update!: NutritionUpdateInput;
}

@NestJsGraphQL.ArgsType()
export class AggregateNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  where?: NutritionRowWhereInput | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowOrderByWithRelationInput], { nullable: true })
  orderBy?: NutritionRowOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput, { nullable: true })
  cursor?: NutritionRowWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyNutritionRowArgs {
  @NestJsGraphQL.Field(() => [NutritionRowCreateManyInput])
  data!: NutritionRowCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowCreateInput)
  data!: NutritionRowCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  where?: NutritionRowWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput)
  where!: NutritionRowWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  where?: NutritionRowWhereInput | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowOrderByWithRelationInput], { nullable: true })
  orderBy?: NutritionRowOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput, { nullable: true })
  cursor?: NutritionRowWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "nutirtionId" | "percent" | "belongToId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  where?: NutritionRowWhereInput | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowOrderByWithRelationInput], { nullable: true })
  orderBy?: NutritionRowOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput, { nullable: true })
  cursor?: NutritionRowWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "nutirtionId" | "percent" | "belongToId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput)
  where!: NutritionRowWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  where?: NutritionRowWhereInput | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowOrderByWithAggregationInput], { nullable: true })
  orderBy?: NutritionRowOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowScalarFieldEnum])
  by!: Array<"id" | "nutirtionId" | "percent" | "belongToId" | "createdAt" | "updatedAt">;

  @NestJsGraphQL.Field(() => NutritionRowScalarWhereWithAggregatesInput, { nullable: true })
  having?: NutritionRowScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowUpdateManyMutationInput)
  data!: NutritionRowUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  where?: NutritionRowWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowUpdateInput)
  data!: NutritionRowUpdateInput;

  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput)
  where!: NutritionRowWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput)
  where!: NutritionRowWhereUniqueInput;

  @NestJsGraphQL.Field(() => NutritionRowCreateInput)
  create!: NutritionRowCreateInput;

  @NestJsGraphQL.Field(() => NutritionRowUpdateInput)
  update!: NutritionRowUpdateInput;
}
