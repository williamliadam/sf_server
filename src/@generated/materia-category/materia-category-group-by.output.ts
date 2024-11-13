import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MateriaCategoryCountAggregate } from './materia-category-count-aggregate.output';
import { MateriaCategoryAvgAggregate } from './materia-category-avg-aggregate.output';
import { MateriaCategorySumAggregate } from './materia-category-sum-aggregate.output';
import { MateriaCategoryMinAggregate } from './materia-category-min-aggregate.output';
import { MateriaCategoryMaxAggregate } from './materia-category-max-aggregate.output';

@ObjectType()
export class MateriaCategoryGroupBy {
	@Field(() => Int, { nullable: false })
	id!: number;

	@Field(() => String, { nullable: false })
	code!: string;

	@Field(() => String, { nullable: false })
	name!: string;

	@Field(() => Int, { nullable: true })
	lastId?: number;

	@Field(() => Date, { nullable: false })
	createdAt!: Date | string;

	@Field(() => Date, { nullable: false })
	updatedAt!: Date | string;

	@Field(() => MateriaCategoryCountAggregate, { nullable: true })
	_count?: MateriaCategoryCountAggregate;

	@Field(() => MateriaCategoryAvgAggregate, { nullable: true })
	_avg?: MateriaCategoryAvgAggregate;

	@Field(() => MateriaCategorySumAggregate, { nullable: true })
	_sum?: MateriaCategorySumAggregate;

	@Field(() => MateriaCategoryMinAggregate, { nullable: true })
	_min?: MateriaCategoryMinAggregate;

	@Field(() => MateriaCategoryMaxAggregate, { nullable: true })
	_max?: MateriaCategoryMaxAggregate;
}
