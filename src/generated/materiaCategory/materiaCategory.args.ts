import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryScalarFieldEnum } from "../common/enums";
import { MateriaCategoryCreateInput } from "../materiaCategory/inputs/MateriaCategoryCreateInput.input";
import { MateriaCategoryCreateManyInput } from "../materiaCategory/inputs/MateriaCategoryCreateManyInput.input";
import { MateriaCategoryOrderByWithAggregationInput } from "../materiaCategory/inputs/MateriaCategoryOrderByWithAggregationInput.input";
import { MateriaCategoryOrderByWithRelationInput } from "../materiaCategory/inputs/MateriaCategoryOrderByWithRelationInput.input";
import { MateriaCategoryScalarWhereWithAggregatesInput } from "../materiaCategory/inputs/MateriaCategoryScalarWhereWithAggregatesInput.input";
import { MateriaCategoryUpdateInput } from "../materiaCategory/inputs/MateriaCategoryUpdateInput.input";
import { MateriaCategoryUpdateManyMutationInput } from "../materiaCategory/inputs/MateriaCategoryUpdateManyMutationInput.input";
import { MateriaCategoryWhereInput } from "../materiaCategory/inputs/MateriaCategoryWhereInput.input";
import { MateriaCategoryWhereUniqueInput } from "../materiaCategory/inputs/MateriaCategoryWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateMateriaCategoryArgs {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereInput, { nullable: true })
  where?: MateriaCategoryWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryOrderByWithRelationInput], { nullable: true })
  orderBy?: MateriaCategoryOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput, { nullable: true })
  cursor?: MateriaCategoryWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyMateriaCategoryArgs {
  @NestJsGraphQL.Field(() => [MateriaCategoryCreateManyInput])
  data!: MateriaCategoryCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneMateriaCategoryArgs {
  @NestJsGraphQL.Field(() => MateriaCategoryCreateInput)
  data!: MateriaCategoryCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyMateriaCategoryArgs {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereInput, { nullable: true })
  where?: MateriaCategoryWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneMateriaCategoryArgs {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput)
  where!: MateriaCategoryWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstMateriaCategoryArgs {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereInput, { nullable: true })
  where?: MateriaCategoryWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryOrderByWithRelationInput], { nullable: true })
  orderBy?: MateriaCategoryOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput, { nullable: true })
  cursor?: MateriaCategoryWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "code" | "name" | "lastId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyMateriaCategoryArgs {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereInput, { nullable: true })
  where?: MateriaCategoryWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryOrderByWithRelationInput], { nullable: true })
  orderBy?: MateriaCategoryOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput, { nullable: true })
  cursor?: MateriaCategoryWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "code" | "name" | "lastId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueMateriaCategoryArgs {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput)
  where!: MateriaCategoryWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByMateriaCategoryArgs {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereInput, { nullable: true })
  where?: MateriaCategoryWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryOrderByWithAggregationInput], { nullable: true })
  orderBy?: MateriaCategoryOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryScalarFieldEnum])
  by!: Array<"id" | "code" | "name" | "lastId" | "createdAt" | "updatedAt">;

  @NestJsGraphQL.Field(() => MateriaCategoryScalarWhereWithAggregatesInput, { nullable: true })
  having?: MateriaCategoryScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyMateriaCategoryArgs {
  @NestJsGraphQL.Field(() => MateriaCategoryUpdateManyMutationInput)
  data!: MateriaCategoryUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => MateriaCategoryWhereInput, { nullable: true })
  where?: MateriaCategoryWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneMateriaCategoryArgs {
  @NestJsGraphQL.Field(() => MateriaCategoryUpdateInput)
  data!: MateriaCategoryUpdateInput;

  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput)
  where!: MateriaCategoryWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneMateriaCategoryArgs {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput)
  where!: MateriaCategoryWhereUniqueInput;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateInput)
  create!: MateriaCategoryCreateInput;

  @NestJsGraphQL.Field(() => MateriaCategoryUpdateInput)
  update!: MateriaCategoryUpdateInput;
}
