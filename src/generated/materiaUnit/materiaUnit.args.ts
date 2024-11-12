import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaUnitScalarFieldEnum } from "../common/enums";
import { MateriaUnitCreateInput } from "../materiaUnit/inputs/MateriaUnitCreateInput.input";
import { MateriaUnitCreateManyInput } from "../materiaUnit/inputs/MateriaUnitCreateManyInput.input";
import { MateriaUnitOrderByWithAggregationInput } from "../materiaUnit/inputs/MateriaUnitOrderByWithAggregationInput.input";
import { MateriaUnitOrderByWithRelationInput } from "../materiaUnit/inputs/MateriaUnitOrderByWithRelationInput.input";
import { MateriaUnitScalarWhereWithAggregatesInput } from "../materiaUnit/inputs/MateriaUnitScalarWhereWithAggregatesInput.input";
import { MateriaUnitUpdateInput } from "../materiaUnit/inputs/MateriaUnitUpdateInput.input";
import { MateriaUnitUpdateManyMutationInput } from "../materiaUnit/inputs/MateriaUnitUpdateManyMutationInput.input";
import { MateriaUnitWhereInput } from "../materiaUnit/inputs/MateriaUnitWhereInput.input";
import { MateriaUnitWhereUniqueInput } from "../materiaUnit/inputs/MateriaUnitWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateMateriaUnitArgs {
  @NestJsGraphQL.Field(() => MateriaUnitWhereInput, { nullable: true })
  where?: MateriaUnitWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MateriaUnitOrderByWithRelationInput], { nullable: true })
  orderBy?: MateriaUnitOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitWhereUniqueInput, { nullable: true })
  cursor?: MateriaUnitWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyMateriaUnitArgs {
  @NestJsGraphQL.Field(() => [MateriaUnitCreateManyInput])
  data!: MateriaUnitCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneMateriaUnitArgs {
  @NestJsGraphQL.Field(() => MateriaUnitCreateInput)
  data!: MateriaUnitCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyMateriaUnitArgs {
  @NestJsGraphQL.Field(() => MateriaUnitWhereInput, { nullable: true })
  where?: MateriaUnitWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneMateriaUnitArgs {
  @NestJsGraphQL.Field(() => MateriaUnitWhereUniqueInput)
  where!: MateriaUnitWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstMateriaUnitArgs {
  @NestJsGraphQL.Field(() => MateriaUnitWhereInput, { nullable: true })
  where?: MateriaUnitWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MateriaUnitOrderByWithRelationInput], { nullable: true })
  orderBy?: MateriaUnitOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitWhereUniqueInput, { nullable: true })
  cursor?: MateriaUnitWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [MateriaUnitScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "code" | "name" | "toKilo" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyMateriaUnitArgs {
  @NestJsGraphQL.Field(() => MateriaUnitWhereInput, { nullable: true })
  where?: MateriaUnitWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MateriaUnitOrderByWithRelationInput], { nullable: true })
  orderBy?: MateriaUnitOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitWhereUniqueInput, { nullable: true })
  cursor?: MateriaUnitWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [MateriaUnitScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "code" | "name" | "toKilo" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueMateriaUnitArgs {
  @NestJsGraphQL.Field(() => MateriaUnitWhereUniqueInput)
  where!: MateriaUnitWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByMateriaUnitArgs {
  @NestJsGraphQL.Field(() => MateriaUnitWhereInput, { nullable: true })
  where?: MateriaUnitWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MateriaUnitOrderByWithAggregationInput], { nullable: true })
  orderBy?: MateriaUnitOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaUnitScalarFieldEnum])
  by!: Array<"id" | "code" | "name" | "toKilo" | "createdAt" | "updatedAt">;

  @NestJsGraphQL.Field(() => MateriaUnitScalarWhereWithAggregatesInput, { nullable: true })
  having?: MateriaUnitScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyMateriaUnitArgs {
  @NestJsGraphQL.Field(() => MateriaUnitUpdateManyMutationInput)
  data!: MateriaUnitUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => MateriaUnitWhereInput, { nullable: true })
  where?: MateriaUnitWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneMateriaUnitArgs {
  @NestJsGraphQL.Field(() => MateriaUnitUpdateInput)
  data!: MateriaUnitUpdateInput;

  @NestJsGraphQL.Field(() => MateriaUnitWhereUniqueInput)
  where!: MateriaUnitWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneMateriaUnitArgs {
  @NestJsGraphQL.Field(() => MateriaUnitWhereUniqueInput)
  where!: MateriaUnitWhereUniqueInput;

  @NestJsGraphQL.Field(() => MateriaUnitCreateInput)
  create!: MateriaUnitCreateInput;

  @NestJsGraphQL.Field(() => MateriaUnitUpdateInput)
  update!: MateriaUnitUpdateInput;
}
