import * as NestJsGraphQL from "@nestjs/graphql";
import { ProfileScalarFieldEnum } from "../common/enums";
import { ProfileCreateInput } from "../profile/inputs/ProfileCreateInput.input";
import { ProfileCreateManyInput } from "../profile/inputs/ProfileCreateManyInput.input";
import { ProfileOrderByWithAggregationInput } from "../profile/inputs/ProfileOrderByWithAggregationInput.input";
import { ProfileOrderByWithRelationInput } from "../profile/inputs/ProfileOrderByWithRelationInput.input";
import { ProfileScalarWhereWithAggregatesInput } from "../profile/inputs/ProfileScalarWhereWithAggregatesInput.input";
import { ProfileUpdateInput } from "../profile/inputs/ProfileUpdateInput.input";
import { ProfileUpdateManyMutationInput } from "../profile/inputs/ProfileUpdateManyMutationInput.input";
import { ProfileWhereInput } from "../profile/inputs/ProfileWhereInput.input";
import { ProfileWhereUniqueInput } from "../profile/inputs/ProfileWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateProfileArgs {
  @NestJsGraphQL.Field(() => ProfileWhereInput, { nullable: true })
  where?: ProfileWhereInput | undefined;

  @NestJsGraphQL.Field(() => [ProfileOrderByWithRelationInput], { nullable: true })
  orderBy?: ProfileOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => ProfileWhereUniqueInput, { nullable: true })
  cursor?: ProfileWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyProfileArgs {
  @NestJsGraphQL.Field(() => [ProfileCreateManyInput])
  data!: ProfileCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneProfileArgs {
  @NestJsGraphQL.Field(() => ProfileCreateInput)
  data!: ProfileCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyProfileArgs {
  @NestJsGraphQL.Field(() => ProfileWhereInput, { nullable: true })
  where?: ProfileWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneProfileArgs {
  @NestJsGraphQL.Field(() => ProfileWhereUniqueInput)
  where!: ProfileWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstProfileArgs {
  @NestJsGraphQL.Field(() => ProfileWhereInput, { nullable: true })
  where?: ProfileWhereInput | undefined;

  @NestJsGraphQL.Field(() => [ProfileOrderByWithRelationInput], { nullable: true })
  orderBy?: ProfileOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => ProfileWhereUniqueInput, { nullable: true })
  cursor?: ProfileWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [ProfileScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "avatar" | "nickName" | "userId" | "createdAt" | "updatedAt" | "goal"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyProfileArgs {
  @NestJsGraphQL.Field(() => ProfileWhereInput, { nullable: true })
  where?: ProfileWhereInput | undefined;

  @NestJsGraphQL.Field(() => [ProfileOrderByWithRelationInput], { nullable: true })
  orderBy?: ProfileOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => ProfileWhereUniqueInput, { nullable: true })
  cursor?: ProfileWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [ProfileScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "avatar" | "nickName" | "userId" | "createdAt" | "updatedAt" | "goal"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueProfileArgs {
  @NestJsGraphQL.Field(() => ProfileWhereUniqueInput)
  where!: ProfileWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByProfileArgs {
  @NestJsGraphQL.Field(() => ProfileWhereInput, { nullable: true })
  where?: ProfileWhereInput | undefined;

  @NestJsGraphQL.Field(() => [ProfileOrderByWithAggregationInput], { nullable: true })
  orderBy?: ProfileOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [ProfileScalarFieldEnum])
  by!: Array<"id" | "avatar" | "nickName" | "userId" | "createdAt" | "updatedAt" | "goal">;

  @NestJsGraphQL.Field(() => ProfileScalarWhereWithAggregatesInput, { nullable: true })
  having?: ProfileScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyProfileArgs {
  @NestJsGraphQL.Field(() => ProfileUpdateManyMutationInput)
  data!: ProfileUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => ProfileWhereInput, { nullable: true })
  where?: ProfileWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneProfileArgs {
  @NestJsGraphQL.Field(() => ProfileUpdateInput)
  data!: ProfileUpdateInput;

  @NestJsGraphQL.Field(() => ProfileWhereUniqueInput)
  where!: ProfileWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneProfileArgs {
  @NestJsGraphQL.Field(() => ProfileWhereUniqueInput)
  where!: ProfileWhereUniqueInput;

  @NestJsGraphQL.Field(() => ProfileCreateInput)
  create!: ProfileCreateInput;

  @NestJsGraphQL.Field(() => ProfileUpdateInput)
  update!: ProfileUpdateInput;
}
