import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryUpdateWithoutMaterialsInput } from './materia-category-update-without-materials.input';
import { Type } from 'class-transformer';
import { MateriaCategoryCreateWithoutMaterialsInput } from './materia-category-create-without-materials.input';
import { MateriaCategoryWhereInput } from './materia-category-where.input';

@InputType()
export class MateriaCategoryUpsertWithoutMaterialsInput {
	@Field(() => MateriaCategoryUpdateWithoutMaterialsInput, { nullable: false })
	@Type(() => MateriaCategoryUpdateWithoutMaterialsInput)
	update!: MateriaCategoryUpdateWithoutMaterialsInput;

	@Field(() => MateriaCategoryCreateWithoutMaterialsInput, { nullable: false })
	@Type(() => MateriaCategoryCreateWithoutMaterialsInput)
	create!: MateriaCategoryCreateWithoutMaterialsInput;

	@Field(() => MateriaCategoryWhereInput, { nullable: true })
	@Type(() => MateriaCategoryWhereInput)
	where?: MateriaCategoryWhereInput;
}
