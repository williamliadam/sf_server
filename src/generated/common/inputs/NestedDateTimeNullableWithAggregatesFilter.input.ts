import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedDateTimeNullableFilter } from "./NestedDateTimeNullableFilter.input";
import { NestedIntNullableFilter } from "./NestedIntNullableFilter.input";

@NestJsGraphQL.InputType('NestedDateTimeNullableWithAggregatesFilter', { isAbstract: true })
export class NestedDateTimeNullableWithAggregatesFilter {
  @NestJsGraphQL.Field(() => Date, { nullable: true })
  equals?: Date | undefined;

  @NestJsGraphQL.Field(() => [Date], { nullable: true })
  in?: Date[] | undefined;

  @NestJsGraphQL.Field(() => [Date], { nullable: true })
  notIn?: Date[] | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  lt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  lte?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  gt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  gte?: Date | undefined;

  @NestJsGraphQL.Field(() => NestedDateTimeNullableWithAggregatesFilter, { nullable: true })
  not?: NestedDateTimeNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _min?: NestedDateTimeNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _max?: NestedDateTimeNullableFilter | undefined;
}
