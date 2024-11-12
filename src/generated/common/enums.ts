import * as NestJsGraphQL from "@nestjs/graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  name = "name",
  password = "password",
  phone = "phone",
  wxId = "wxId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  role = "role"
}
NestJsGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});

export enum PostScalarFieldEnum {
  id = "id",
  title = "title",
  content = "content",
  published = "published",
  authorId = "authorId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});

export enum ProfileScalarFieldEnum {
  id = "id",
  avatar = "avatar",
  nickName = "nickName",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  goal = "goal"
}
NestJsGraphQL.registerEnumType(ProfileScalarFieldEnum, {
  name: "ProfileScalarFieldEnum",
  description: undefined,
});

export enum BodyDetailScalarFieldEnum {
  id = "id",
  weight = "weight",
  height = "height",
  age = "age",
  bmi = "bmi",
  bmr = "bmr",
  tdee = "tdee",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(BodyDetailScalarFieldEnum, {
  name: "BodyDetailScalarFieldEnum",
  description: undefined,
});

export enum NutritionScalarFieldEnum {
  id = "id",
  code = "code",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(NutritionScalarFieldEnum, {
  name: "NutritionScalarFieldEnum",
  description: undefined,
});

export enum NutritionRowScalarFieldEnum {
  id = "id",
  nutirtionId = "nutirtionId",
  percent = "percent",
  belongToId = "belongToId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(NutritionRowScalarFieldEnum, {
  name: "NutritionRowScalarFieldEnum",
  description: undefined,
});

export enum MateriaUnitScalarFieldEnum {
  id = "id",
  code = "code",
  name = "name",
  toKilo = "toKilo",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(MateriaUnitScalarFieldEnum, {
  name: "MateriaUnitScalarFieldEnum",
  description: undefined,
});

export enum MateriaCategoryScalarFieldEnum {
  id = "id",
  code = "code",
  name = "name",
  lastId = "lastId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(MateriaCategoryScalarFieldEnum, {
  name: "MateriaCategoryScalarFieldEnum",
  description: undefined,
});

export enum MaterialScalarFieldEnum {
  id = "id",
  name = "name",
  code = "code",
  nickName = "nickName",
  materiaCategoryId = "materiaCategoryId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(MaterialScalarFieldEnum, {
  name: "MaterialScalarFieldEnum",
  description: undefined,
});

export enum IngredientScalarFieldEnum {
  id = "id",
  materialId = "materialId",
  amount = "amount",
  materiaUnitId = "materiaUnitId",
  recipeId = "recipeId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(IngredientScalarFieldEnum, {
  name: "IngredientScalarFieldEnum",
  description: undefined,
});

export enum MethodScalarFieldEnum {
  id = "id",
  code = "code",
  name = "name",
  desc = "desc",
  recipeId = "recipeId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(MethodScalarFieldEnum, {
  name: "MethodScalarFieldEnum",
  description: undefined,
});

export enum RecipeScalarFieldEnum {
  id = "id",
  name = "name",
  stars = "stars",
  authorId = "authorId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(RecipeScalarFieldEnum, {
  name: "RecipeScalarFieldEnum",
  description: undefined,
});

export enum DishTemplateScalarFieldEnum {
  id = "id",
  recipeId = "recipeId",
  amount = "amount",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  mealTemplateId = "mealTemplateId"
}
NestJsGraphQL.registerEnumType(DishTemplateScalarFieldEnum, {
  name: "DishTemplateScalarFieldEnum",
  description: undefined,
});

export enum MealTemplateScalarFieldEnum {
  id = "id",
  name = "name",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(MealTemplateScalarFieldEnum, {
  name: "MealTemplateScalarFieldEnum",
  description: undefined,
});

export enum DishPlanScalarFieldEnum {
  id = "id",
  recipeId = "recipeId",
  amount = "amount",
  planCookerId = "planCookerId",
  mealPlanId = "mealPlanId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(DishPlanScalarFieldEnum, {
  name: "DishPlanScalarFieldEnum",
  description: undefined,
});

export enum MealPlanScalarFieldEnum {
  id = "id",
  planTime = "planTime",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  type = "type"
}
NestJsGraphQL.registerEnumType(MealPlanScalarFieldEnum, {
  name: "MealPlanScalarFieldEnum",
  description: undefined,
});

export enum SortOrder {
  asc = "asc",
  desc = "desc"
}
NestJsGraphQL.registerEnumType(SortOrder, {
  name: "SortOrder",
  description: undefined,
});

export enum QueryMode {
  "default" = "default",
  insensitive = "insensitive"
}
NestJsGraphQL.registerEnumType(QueryMode, {
  name: "QueryMode",
  description: undefined,
});
