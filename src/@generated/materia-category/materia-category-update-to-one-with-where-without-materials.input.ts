import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryWhereInput } from './materia-category-where.input';
import { Type } from 'class-transformer';
import { MateriaCategoryUpdateWithoutMaterialsInput } from './materia-category-update-without-materials.input';

@InputType()
export class MateriaCategoryUpdateToOneWithWhereWithoutMaterialsInput {
	@Field(() => MateriaCategoryWhereInput, { nullable: true })
	@Type(() => MateriaCategoryWhereInput)
	where?: MateriaCategoryWhereInput;

	@Field(() => MateriaCategoryUpdateWithoutMaterialsInput, { nullable: false })
	@Type(() => MateriaCategoryUpdateWithoutMaterialsInput)
	data!: MateriaCategoryUpdateWithoutMaterialsInput;
}
