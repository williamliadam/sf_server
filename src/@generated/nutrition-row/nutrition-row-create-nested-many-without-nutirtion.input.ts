import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionRowCreateWithoutNutirtionInput } from './nutrition-row-create-without-nutirtion.input';
import { Type } from 'class-transformer';
import { NutritionRowCreateOrConnectWithoutNutirtionInput } from './nutrition-row-create-or-connect-without-nutirtion.input';
import { NutritionRowCreateManyNutirtionInputEnvelope } from './nutrition-row-create-many-nutirtion-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';

@InputType()
export class NutritionRowCreateNestedManyWithoutNutirtionInput {
	@Field(() => [NutritionRowCreateWithoutNutirtionInput], { nullable: true })
	@Type(() => NutritionRowCreateWithoutNutirtionInput)
	create?: Array<NutritionRowCreateWithoutNutirtionInput>;

	@Field(() => [NutritionRowCreateOrConnectWithoutNutirtionInput], {
		nullable: true,
	})
	@Type(() => NutritionRowCreateOrConnectWithoutNutirtionInput)
	connectOrCreate?: Array<NutritionRowCreateOrConnectWithoutNutirtionInput>;

	@Field(() => NutritionRowCreateManyNutirtionInputEnvelope, { nullable: true })
	@Type(() => NutritionRowCreateManyNutirtionInputEnvelope)
	createMany?: NutritionRowCreateManyNutirtionInputEnvelope;

	@Field(() => [NutritionRowWhereUniqueInput], { nullable: true })
	@Type(() => NutritionRowWhereUniqueInput)
	connect?: Array<Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>>;
}
