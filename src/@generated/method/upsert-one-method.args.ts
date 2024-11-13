import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
import { Type } from 'class-transformer';
import { MethodCreateInput } from './method-create.input';
import { MethodUpdateInput } from './method-update.input';

@ArgsType()
export class UpsertOneMethodArgs {
	@Field(() => MethodWhereUniqueInput, { nullable: false })
	@Type(() => MethodWhereUniqueInput)
	where!: Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>;

	@Field(() => MethodCreateInput, { nullable: false })
	@Type(() => MethodCreateInput)
	create!: MethodCreateInput;

	@Field(() => MethodUpdateInput, { nullable: false })
	@Type(() => MethodUpdateInput)
	update!: MethodUpdateInput;
}
