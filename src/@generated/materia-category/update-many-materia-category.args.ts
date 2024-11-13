import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaCategoryUpdateManyMutationInput } from './materia-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MateriaCategoryWhereInput } from './materia-category-where.input';

@ArgsType()
export class UpdateManyMateriaCategoryArgs {
	@Field(() => MateriaCategoryUpdateManyMutationInput, { nullable: false })
	@Type(() => MateriaCategoryUpdateManyMutationInput)
	data!: MateriaCategoryUpdateManyMutationInput;

	@Field(() => MateriaCategoryWhereInput, { nullable: true })
	@Type(() => MateriaCategoryWhereInput)
	where?: MateriaCategoryWhereInput;
}
