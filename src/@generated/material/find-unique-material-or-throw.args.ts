import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMaterialOrThrowArgs {
	@Field(() => MaterialWhereUniqueInput, { nullable: false })
	@Type(() => MaterialWhereUniqueInput)
	where!: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
}
