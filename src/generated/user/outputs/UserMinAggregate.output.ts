import * as NestJsGraphQL from "@nestjs/graphql";
import { Role } from "../../enums/Role.enum";

@NestJsGraphQL.ObjectType('UserMinAggregate', { isAbstract: true })
export class UserMinAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  email!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  name!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  password!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  phone!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  wxId!: string | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt!: Date | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt!: Date | null;

  @NestJsGraphQL.Field(() => Role, { nullable: true })
  role!: "USER" | "ADMIN" | null;
}
