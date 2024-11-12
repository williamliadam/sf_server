import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedDateTimeNullableFilter } from "./NestedDateTimeNullableFilter.input";

@NestJsGraphQL.InputType('DateTimeNullableFilter', { isAbstract: true })
export class DateTimeNullableFilter {
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

  @NestJsGraphQL.Field(() => NestedDateTimeNullableFilter, { nullable: true })
  not?: NestedDateTimeNullableFilter | undefined;
}
