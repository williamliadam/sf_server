import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Ingredient } from '../ingredient/ingredient.model';
import { MateriaUnitCount } from './materia-unit-count.output';

@ObjectType()
export class MateriaUnit {
	@Field(() => ID, { nullable: false })
	id!: number;

	@Field(() => String, { nullable: false })
	code!: string;

	@Field(() => String, { nullable: false })
	name!: string;

	@Field(() => Int, { nullable: false })
	toKilo!: number;

	@Field(() => Date, { nullable: false })
	createdAt!: Date;

	@Field(() => Date, { nullable: false })
	updatedAt!: Date;

	@Field(() => [Ingredient], { nullable: true })
	ingredients?: Array<Ingredient>;

	@Field(() => MateriaUnitCount, { nullable: false })
	_count?: MateriaUnitCount;
}
