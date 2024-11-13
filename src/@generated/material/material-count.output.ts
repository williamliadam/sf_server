import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MaterialCount {
	@Field(() => Int, { nullable: false })
	nutritionMatrix?: number;

	@Field(() => Int, { nullable: false })
	ingredients?: number;
}
