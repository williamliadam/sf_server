import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';
import { BodyDetailCreateNestedOneWithoutUserInput } from '../body-detail/body-detail-create-nested-one-without-user.input';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
import { RecipeCreateNestedManyWithoutAuthorInput } from '../recipe/recipe-create-nested-many-without-author.input';
import { MealTemplateCreateNestedManyWithoutCreateByInput } from '../meal-template/meal-template-create-nested-many-without-create-by.input';
import { MealPlanCreateNestedManyWithoutCreateByInput } from '../meal-plan/meal-plan-create-nested-many-without-create-by.input';

@InputType()
export class UserCreateWithoutChargeDishPlansInput {
	@Field(() => String, { nullable: true })
	email?: string;

	@Field(() => String, { nullable: true })
	name?: string;

	@Field(() => String, { nullable: false })
	password!: string;

	@Field(() => String, { nullable: true })
	phone?: string;

	@Field(() => String, { nullable: true })
	wxId?: string;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => Role, { nullable: true })
	role?: keyof typeof Role;

	@Field(() => ProfileCreateNestedOneWithoutUserInput, { nullable: true })
	profile?: ProfileCreateNestedOneWithoutUserInput;

	@Field(() => BodyDetailCreateNestedOneWithoutUserInput, { nullable: true })
	bodyDetail?: BodyDetailCreateNestedOneWithoutUserInput;

	@Field(() => PostCreateNestedManyWithoutAuthorInput, { nullable: true })
	myPosts?: PostCreateNestedManyWithoutAuthorInput;

	@Field(() => RecipeCreateNestedManyWithoutAuthorInput, { nullable: true })
	myRecipes?: RecipeCreateNestedManyWithoutAuthorInput;

	@Field(() => MealTemplateCreateNestedManyWithoutCreateByInput, {
		nullable: true,
	})
	myMealTemplates?: MealTemplateCreateNestedManyWithoutCreateByInput;

	@Field(() => MealPlanCreateNestedManyWithoutCreateByInput, { nullable: true })
	myMealPlans?: MealPlanCreateNestedManyWithoutCreateByInput;
}
