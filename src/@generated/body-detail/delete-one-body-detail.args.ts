import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneBodyDetailArgs {
	@Field(() => BodyDetailWhereUniqueInput, { nullable: false })
	@Type(() => BodyDetailWhereUniqueInput)
	where!: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;
}
