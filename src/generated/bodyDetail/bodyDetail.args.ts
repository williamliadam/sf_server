import * as NestJsGraphQL from "@nestjs/graphql";
import { BodyDetailCreateInput } from "../bodyDetail/inputs/BodyDetailCreateInput.input";
import { BodyDetailCreateManyInput } from "../bodyDetail/inputs/BodyDetailCreateManyInput.input";
import { BodyDetailOrderByWithAggregationInput } from "../bodyDetail/inputs/BodyDetailOrderByWithAggregationInput.input";
import { BodyDetailOrderByWithRelationInput } from "../bodyDetail/inputs/BodyDetailOrderByWithRelationInput.input";
import { BodyDetailScalarWhereWithAggregatesInput } from "../bodyDetail/inputs/BodyDetailScalarWhereWithAggregatesInput.input";
import { BodyDetailUpdateInput } from "../bodyDetail/inputs/BodyDetailUpdateInput.input";
import { BodyDetailUpdateManyMutationInput } from "../bodyDetail/inputs/BodyDetailUpdateManyMutationInput.input";
import { BodyDetailWhereInput } from "../bodyDetail/inputs/BodyDetailWhereInput.input";
import { BodyDetailWhereUniqueInput } from "../bodyDetail/inputs/BodyDetailWhereUniqueInput.input";
import { BodyDetailScalarFieldEnum } from "../common/enums";

@NestJsGraphQL.ArgsType()
export class AggregateBodyDetailArgs {
  @NestJsGraphQL.Field(() => BodyDetailWhereInput, { nullable: true })
  where?: BodyDetailWhereInput | undefined;

  @NestJsGraphQL.Field(() => [BodyDetailOrderByWithRelationInput], { nullable: true })
  orderBy?: BodyDetailOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => BodyDetailWhereUniqueInput, { nullable: true })
  cursor?: BodyDetailWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyBodyDetailArgs {
  @NestJsGraphQL.Field(() => [BodyDetailCreateManyInput])
  data!: BodyDetailCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneBodyDetailArgs {
  @NestJsGraphQL.Field(() => BodyDetailCreateInput)
  data!: BodyDetailCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyBodyDetailArgs {
  @NestJsGraphQL.Field(() => BodyDetailWhereInput, { nullable: true })
  where?: BodyDetailWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneBodyDetailArgs {
  @NestJsGraphQL.Field(() => BodyDetailWhereUniqueInput)
  where!: BodyDetailWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstBodyDetailArgs {
  @NestJsGraphQL.Field(() => BodyDetailWhereInput, { nullable: true })
  where?: BodyDetailWhereInput | undefined;

  @NestJsGraphQL.Field(() => [BodyDetailOrderByWithRelationInput], { nullable: true })
  orderBy?: BodyDetailOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => BodyDetailWhereUniqueInput, { nullable: true })
  cursor?: BodyDetailWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [BodyDetailScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "weight" | "height" | "age" | "bmi" | "bmr" | "tdee" | "userId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyBodyDetailArgs {
  @NestJsGraphQL.Field(() => BodyDetailWhereInput, { nullable: true })
  where?: BodyDetailWhereInput | undefined;

  @NestJsGraphQL.Field(() => [BodyDetailOrderByWithRelationInput], { nullable: true })
  orderBy?: BodyDetailOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => BodyDetailWhereUniqueInput, { nullable: true })
  cursor?: BodyDetailWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [BodyDetailScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "weight" | "height" | "age" | "bmi" | "bmr" | "tdee" | "userId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueBodyDetailArgs {
  @NestJsGraphQL.Field(() => BodyDetailWhereUniqueInput)
  where!: BodyDetailWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByBodyDetailArgs {
  @NestJsGraphQL.Field(() => BodyDetailWhereInput, { nullable: true })
  where?: BodyDetailWhereInput | undefined;

  @NestJsGraphQL.Field(() => [BodyDetailOrderByWithAggregationInput], { nullable: true })
  orderBy?: BodyDetailOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [BodyDetailScalarFieldEnum])
  by!: Array<"id" | "weight" | "height" | "age" | "bmi" | "bmr" | "tdee" | "userId" | "createdAt" | "updatedAt">;

  @NestJsGraphQL.Field(() => BodyDetailScalarWhereWithAggregatesInput, { nullable: true })
  having?: BodyDetailScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyBodyDetailArgs {
  @NestJsGraphQL.Field(() => BodyDetailUpdateManyMutationInput)
  data!: BodyDetailUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => BodyDetailWhereInput, { nullable: true })
  where?: BodyDetailWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneBodyDetailArgs {
  @NestJsGraphQL.Field(() => BodyDetailUpdateInput)
  data!: BodyDetailUpdateInput;

  @NestJsGraphQL.Field(() => BodyDetailWhereUniqueInput)
  where!: BodyDetailWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneBodyDetailArgs {
  @NestJsGraphQL.Field(() => BodyDetailWhereUniqueInput)
  where!: BodyDetailWhereUniqueInput;

  @NestJsGraphQL.Field(() => BodyDetailCreateInput)
  create!: BodyDetailCreateInput;

  @NestJsGraphQL.Field(() => BodyDetailUpdateInput)
  update!: BodyDetailUpdateInput;
}
