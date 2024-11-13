import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MealType } from '../prisma/meal-type.enum';

@InputType()
export class MealPlanUncheckedCreateWithoutDishPlansInput {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => Date, { nullable: true })
	planTime?: Date | string;

	@Field(() => Int, { nullable: false })
	userId!: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => MealType, { nullable: true })
	type?: keyof typeof MealType;
}
