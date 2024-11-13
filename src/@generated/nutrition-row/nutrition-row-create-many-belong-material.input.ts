import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NutritionRowCreateManyBelongMaterialInput {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => Int, { nullable: false })
	nutirtionId!: number;

	@Field(() => Int, { nullable: false })
	percent!: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;
}
