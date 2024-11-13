import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyDetailCreateWithoutUserInput } from './body-detail-create-without-user.input';
import { Type } from 'class-transformer';
import { BodyDetailCreateOrConnectWithoutUserInput } from './body-detail-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';

@InputType()
export class BodyDetailUncheckedCreateNestedOneWithoutUserInput {
	@Field(() => BodyDetailCreateWithoutUserInput, { nullable: true })
	@Type(() => BodyDetailCreateWithoutUserInput)
	create?: BodyDetailCreateWithoutUserInput;

	@Field(() => BodyDetailCreateOrConnectWithoutUserInput, { nullable: true })
	@Type(() => BodyDetailCreateOrConnectWithoutUserInput)
	connectOrCreate?: BodyDetailCreateOrConnectWithoutUserInput;

	@Field(() => BodyDetailWhereUniqueInput, { nullable: true })
	@Type(() => BodyDetailWhereUniqueInput)
	connect?: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;
}
