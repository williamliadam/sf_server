import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionRowCreateManyNutirtionInput } from './nutrition-row-create-many-nutirtion.input';
import { Type } from 'class-transformer';

@InputType()
export class NutritionRowCreateManyNutirtionInputEnvelope {

    @Field(() => [NutritionRowCreateManyNutirtionInput], {nullable:false})
    @Type(() => NutritionRowCreateManyNutirtionInput)
    data!: Array<NutritionRowCreateManyNutirtionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
