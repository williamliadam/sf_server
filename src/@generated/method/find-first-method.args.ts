import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MethodWhereInput } from './method-where.input';
import { Type } from 'class-transformer';
import { MethodOrderByWithRelationInput } from './method-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MethodScalarFieldEnum } from './method-scalar-field.enum';

@ArgsType()
export class FindFirstMethodArgs {
	@Field(() => MethodWhereInput, { nullable: true })
	@Type(() => MethodWhereInput)
	where?: MethodWhereInput;

	@Field(() => [MethodOrderByWithRelationInput], { nullable: true })
	orderBy?: Array<MethodOrderByWithRelationInput>;

	@Field(() => MethodWhereUniqueInput, { nullable: true })
	cursor?: Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>;

	@Field(() => Int, { nullable: true })
	take?: number;

	@Field(() => Int, { nullable: true })
	skip?: number;

	@Field(() => [MethodScalarFieldEnum], { nullable: true })
	distinct?: Array<keyof typeof MethodScalarFieldEnum>;
}
