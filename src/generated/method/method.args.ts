import * as NestJsGraphQL from "@nestjs/graphql";
import { MethodScalarFieldEnum } from "../common/enums";
import { MethodCreateInput } from "../method/inputs/MethodCreateInput.input";
import { MethodCreateManyInput } from "../method/inputs/MethodCreateManyInput.input";
import { MethodOrderByWithAggregationInput } from "../method/inputs/MethodOrderByWithAggregationInput.input";
import { MethodOrderByWithRelationInput } from "../method/inputs/MethodOrderByWithRelationInput.input";
import { MethodScalarWhereWithAggregatesInput } from "../method/inputs/MethodScalarWhereWithAggregatesInput.input";
import { MethodUpdateInput } from "../method/inputs/MethodUpdateInput.input";
import { MethodUpdateManyMutationInput } from "../method/inputs/MethodUpdateManyMutationInput.input";
import { MethodWhereInput } from "../method/inputs/MethodWhereInput.input";
import { MethodWhereUniqueInput } from "../method/inputs/MethodWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateMethodArgs {
  @NestJsGraphQL.Field(() => MethodWhereInput, { nullable: true })
  where?: MethodWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MethodOrderByWithRelationInput], { nullable: true })
  orderBy?: MethodOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MethodWhereUniqueInput, { nullable: true })
  cursor?: MethodWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyMethodArgs {
  @NestJsGraphQL.Field(() => [MethodCreateManyInput])
  data!: MethodCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneMethodArgs {
  @NestJsGraphQL.Field(() => MethodCreateInput)
  data!: MethodCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyMethodArgs {
  @NestJsGraphQL.Field(() => MethodWhereInput, { nullable: true })
  where?: MethodWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneMethodArgs {
  @NestJsGraphQL.Field(() => MethodWhereUniqueInput)
  where!: MethodWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstMethodArgs {
  @NestJsGraphQL.Field(() => MethodWhereInput, { nullable: true })
  where?: MethodWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MethodOrderByWithRelationInput], { nullable: true })
  orderBy?: MethodOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MethodWhereUniqueInput, { nullable: true })
  cursor?: MethodWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [MethodScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "code" | "name" | "desc" | "recipeId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyMethodArgs {
  @NestJsGraphQL.Field(() => MethodWhereInput, { nullable: true })
  where?: MethodWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MethodOrderByWithRelationInput], { nullable: true })
  orderBy?: MethodOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MethodWhereUniqueInput, { nullable: true })
  cursor?: MethodWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [MethodScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "code" | "name" | "desc" | "recipeId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueMethodArgs {
  @NestJsGraphQL.Field(() => MethodWhereUniqueInput)
  where!: MethodWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByMethodArgs {
  @NestJsGraphQL.Field(() => MethodWhereInput, { nullable: true })
  where?: MethodWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MethodOrderByWithAggregationInput], { nullable: true })
  orderBy?: MethodOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [MethodScalarFieldEnum])
  by!: Array<"id" | "code" | "name" | "desc" | "recipeId" | "createdAt" | "updatedAt">;

  @NestJsGraphQL.Field(() => MethodScalarWhereWithAggregatesInput, { nullable: true })
  having?: MethodScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyMethodArgs {
  @NestJsGraphQL.Field(() => MethodUpdateManyMutationInput)
  data!: MethodUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => MethodWhereInput, { nullable: true })
  where?: MethodWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneMethodArgs {
  @NestJsGraphQL.Field(() => MethodUpdateInput)
  data!: MethodUpdateInput;

  @NestJsGraphQL.Field(() => MethodWhereUniqueInput)
  where!: MethodWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneMethodArgs {
  @NestJsGraphQL.Field(() => MethodWhereUniqueInput)
  where!: MethodWhereUniqueInput;

  @NestJsGraphQL.Field(() => MethodCreateInput)
  create!: MethodCreateInput;

  @NestJsGraphQL.Field(() => MethodUpdateInput)
  update!: MethodUpdateInput;
}
