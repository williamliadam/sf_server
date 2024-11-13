import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
import { Type } from 'class-transformer';
import { BodyDetailCreateInput } from './body-detail-create.input';
import { BodyDetailUpdateInput } from './body-detail-update.input';

@ArgsType()
export class UpsertOneBodyDetailArgs {
	@Field(() => BodyDetailWhereUniqueInput, { nullable: false })
	@Type(() => BodyDetailWhereUniqueInput)
	where!: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;

	@Field(() => BodyDetailCreateInput, { nullable: false })
	@Type(() => BodyDetailCreateInput)
	create!: BodyDetailCreateInput;

	@Field(() => BodyDetailUpdateInput, { nullable: false })
	@Type(() => BodyDetailUpdateInput)
	update!: BodyDetailUpdateInput;
}
