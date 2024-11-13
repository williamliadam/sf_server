import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { Type } from 'class-transformer';
import { MaterialCreateWithoutIngredientsInput } from './material-create-without-ingredients.input';

@InputType()
export class MaterialCreateOrConnectWithoutIngredientsInput {
	@Field(() => MaterialWhereUniqueInput, { nullable: false })
	@Type(() => MaterialWhereUniqueInput)
	where!: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;

	@Field(() => MaterialCreateWithoutIngredientsInput, { nullable: false })
	@Type(() => MaterialCreateWithoutIngredientsInput)
	create!: MaterialCreateWithoutIngredientsInput;
}
