import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MealTemplateCount {
	@Field(() => Int, { nullable: false })
	dishTemplates?: number;
}
