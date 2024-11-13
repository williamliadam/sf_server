import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyDetailUpdateInput } from './body-detail-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';

@ArgsType()
export class UpdateOneBodyDetailArgs {
	@Field(() => BodyDetailUpdateInput, { nullable: false })
	@Type(() => BodyDetailUpdateInput)
	data!: BodyDetailUpdateInput;

	@Field(() => BodyDetailWhereUniqueInput, { nullable: false })
	@Type(() => BodyDetailWhereUniqueInput)
	where!: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;
}
