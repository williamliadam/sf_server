import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateWithoutIngredientsInput } from './material-create-without-ingredients.input';
import { Type } from 'class-transformer';
import { MaterialCreateOrConnectWithoutIngredientsInput } from './material-create-or-connect-without-ingredients.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';

@InputType()
export class MaterialCreateNestedOneWithoutIngredientsInput {
	@Field(() => MaterialCreateWithoutIngredientsInput, { nullable: true })
	@Type(() => MaterialCreateWithoutIngredientsInput)
	create?: MaterialCreateWithoutIngredientsInput;

	@Field(() => MaterialCreateOrConnectWithoutIngredientsInput, {
		nullable: true,
	})
	@Type(() => MaterialCreateOrConnectWithoutIngredientsInput)
	connectOrCreate?: MaterialCreateOrConnectWithoutIngredientsInput;

	@Field(() => MaterialWhereUniqueInput, { nullable: true })
	@Type(() => MaterialWhereUniqueInput)
	connect?: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
}
