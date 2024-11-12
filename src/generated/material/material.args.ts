import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialScalarFieldEnum } from "../common/enums";
import { MaterialCreateInput } from "../material/inputs/MaterialCreateInput.input";
import { MaterialCreateManyInput } from "../material/inputs/MaterialCreateManyInput.input";
import { MaterialOrderByWithAggregationInput } from "../material/inputs/MaterialOrderByWithAggregationInput.input";
import { MaterialOrderByWithRelationInput } from "../material/inputs/MaterialOrderByWithRelationInput.input";
import { MaterialScalarWhereWithAggregatesInput } from "../material/inputs/MaterialScalarWhereWithAggregatesInput.input";
import { MaterialUpdateInput } from "../material/inputs/MaterialUpdateInput.input";
import { MaterialUpdateManyMutationInput } from "../material/inputs/MaterialUpdateManyMutationInput.input";
import { MaterialWhereInput } from "../material/inputs/MaterialWhereInput.input";
import { MaterialWhereUniqueInput } from "../material/inputs/MaterialWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateMaterialArgs {
  @NestJsGraphQL.Field(() => MaterialWhereInput, { nullable: true })
  where?: MaterialWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MaterialOrderByWithRelationInput], { nullable: true })
  orderBy?: MaterialOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput, { nullable: true })
  cursor?: MaterialWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyMaterialArgs {
  @NestJsGraphQL.Field(() => [MaterialCreateManyInput])
  data!: MaterialCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneMaterialArgs {
  @NestJsGraphQL.Field(() => MaterialCreateInput)
  data!: MaterialCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyMaterialArgs {
  @NestJsGraphQL.Field(() => MaterialWhereInput, { nullable: true })
  where?: MaterialWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneMaterialArgs {
  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput)
  where!: MaterialWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstMaterialArgs {
  @NestJsGraphQL.Field(() => MaterialWhereInput, { nullable: true })
  where?: MaterialWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MaterialOrderByWithRelationInput], { nullable: true })
  orderBy?: MaterialOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput, { nullable: true })
  cursor?: MaterialWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [MaterialScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "code" | "nickName" | "materiaCategoryId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyMaterialArgs {
  @NestJsGraphQL.Field(() => MaterialWhereInput, { nullable: true })
  where?: MaterialWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MaterialOrderByWithRelationInput], { nullable: true })
  orderBy?: MaterialOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput, { nullable: true })
  cursor?: MaterialWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [MaterialScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "code" | "nickName" | "materiaCategoryId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueMaterialArgs {
  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput)
  where!: MaterialWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByMaterialArgs {
  @NestJsGraphQL.Field(() => MaterialWhereInput, { nullable: true })
  where?: MaterialWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MaterialOrderByWithAggregationInput], { nullable: true })
  orderBy?: MaterialOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialScalarFieldEnum])
  by!: Array<"id" | "name" | "code" | "nickName" | "materiaCategoryId" | "createdAt" | "updatedAt">;

  @NestJsGraphQL.Field(() => MaterialScalarWhereWithAggregatesInput, { nullable: true })
  having?: MaterialScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyMaterialArgs {
  @NestJsGraphQL.Field(() => MaterialUpdateManyMutationInput)
  data!: MaterialUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => MaterialWhereInput, { nullable: true })
  where?: MaterialWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneMaterialArgs {
  @NestJsGraphQL.Field(() => MaterialUpdateInput)
  data!: MaterialUpdateInput;

  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput)
  where!: MaterialWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneMaterialArgs {
  @NestJsGraphQL.Field(() => MaterialWhereUniqueInput)
  where!: MaterialWhereUniqueInput;

  @NestJsGraphQL.Field(() => MaterialCreateInput)
  create!: MaterialCreateInput;

  @NestJsGraphQL.Field(() => MaterialUpdateInput)
  update!: MaterialUpdateInput;
}
