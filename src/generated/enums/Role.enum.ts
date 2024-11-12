import * as NestJsGraphQL from "@nestjs/graphql";

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN"
}
NestJsGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
