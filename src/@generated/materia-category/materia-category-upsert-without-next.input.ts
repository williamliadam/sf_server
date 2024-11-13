import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryUpdateWithoutNextInput } from './materia-category-update-without-next.input';
import { Type } from 'class-transformer';
import { MateriaCategoryCreateWithoutNextInput } from './materia-category-create-without-next.input';
import { MateriaCategoryWhereInput } from './materia-category-where.input';

@InputType()
export class MateriaCategoryUpsertWithoutNextInput {
	@Field(() => MateriaCategoryUpdateWithoutNextInput, { nullable: false })
	@Type(() => MateriaCategoryUpdateWithoutNextInput)
	update!: MateriaCategoryUpdateWithoutNextInput;

	@Field(() => MateriaCategoryCreateWithoutNextInput, { nullable: false })
	@Type(() => MateriaCategoryCreateWithoutNextInput)
	create!: MateriaCategoryCreateWithoutNextInput;

	@Field(() => MateriaCategoryWhereInput, { nullable: true })
	@Type(() => MateriaCategoryWhereInput)
	where?: MateriaCategoryWhereInput;
}
