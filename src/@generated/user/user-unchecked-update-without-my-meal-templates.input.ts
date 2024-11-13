import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { ProfileUncheckedUpdateOneWithoutUserNestedInput } from '../profile/profile-unchecked-update-one-without-user-nested.input';
import { BodyDetailUncheckedUpdateOneWithoutUserNestedInput } from '../body-detail/body-detail-unchecked-update-one-without-user-nested.input';
import { PostUncheckedUpdateManyWithoutAuthorNestedInput } from '../post/post-unchecked-update-many-without-author-nested.input';
import { RecipeUncheckedUpdateManyWithoutAuthorNestedInput } from '../recipe/recipe-unchecked-update-many-without-author-nested.input';
import { MealPlanUncheckedUpdateManyWithoutCreateByNestedInput } from '../meal-plan/meal-plan-unchecked-update-many-without-create-by-nested.input';
import { DishPlanUncheckedUpdateManyWithoutPlanCookerNestedInput } from '../dish-plan/dish-plan-unchecked-update-many-without-plan-cooker-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutMyMealTemplatesInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	id?: IntFieldUpdateOperationsInput;

	@Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
	email?: NullableStringFieldUpdateOperationsInput;

	@Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
	name?: NullableStringFieldUpdateOperationsInput;

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	password?: StringFieldUpdateOperationsInput;

	@Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
	phone?: NullableStringFieldUpdateOperationsInput;

	@Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
	wxId?: NullableStringFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput;

	@Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
	role?: EnumRoleFieldUpdateOperationsInput;

	@Field(() => ProfileUncheckedUpdateOneWithoutUserNestedInput, {
		nullable: true,
	})
	profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;

	@Field(() => BodyDetailUncheckedUpdateOneWithoutUserNestedInput, {
		nullable: true,
	})
	bodyDetail?: BodyDetailUncheckedUpdateOneWithoutUserNestedInput;

	@Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {
		nullable: true,
	})
	myPosts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;

	@Field(() => RecipeUncheckedUpdateManyWithoutAuthorNestedInput, {
		nullable: true,
	})
	myRecipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput;

	@Field(() => MealPlanUncheckedUpdateManyWithoutCreateByNestedInput, {
		nullable: true,
	})
	myMealPlans?: MealPlanUncheckedUpdateManyWithoutCreateByNestedInput;

	@Field(() => DishPlanUncheckedUpdateManyWithoutPlanCookerNestedInput, {
		nullable: true,
	})
	chargeDishPlans?: DishPlanUncheckedUpdateManyWithoutPlanCookerNestedInput;
}
