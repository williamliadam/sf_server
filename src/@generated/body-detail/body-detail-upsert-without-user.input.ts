import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyDetailUpdateWithoutUserInput } from './body-detail-update-without-user.input';
import { Type } from 'class-transformer';
import { BodyDetailCreateWithoutUserInput } from './body-detail-create-without-user.input';
import { BodyDetailWhereInput } from './body-detail-where.input';

@InputType()
export class BodyDetailUpsertWithoutUserInput {
	@Field(() => BodyDetailUpdateWithoutUserInput, { nullable: false })
	@Type(() => BodyDetailUpdateWithoutUserInput)
	update!: BodyDetailUpdateWithoutUserInput;

	@Field(() => BodyDetailCreateWithoutUserInput, { nullable: false })
	@Type(() => BodyDetailCreateWithoutUserInput)
	create!: BodyDetailCreateWithoutUserInput;

	@Field(() => BodyDetailWhereInput, { nullable: true })
	@Type(() => BodyDetailWhereInput)
	where?: BodyDetailWhereInput;
}
