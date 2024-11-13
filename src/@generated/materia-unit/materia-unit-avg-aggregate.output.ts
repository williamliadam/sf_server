import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MateriaUnitAvgAggregate {
	@Field(() => Float, { nullable: true })
	id?: number;

	@Field(() => Float, { nullable: true })
	toKilo?: number;
}
