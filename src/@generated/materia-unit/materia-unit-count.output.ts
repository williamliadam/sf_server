import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MateriaUnitCount {
	@Field(() => Int, { nullable: false })
	ingredients?: number;
}
