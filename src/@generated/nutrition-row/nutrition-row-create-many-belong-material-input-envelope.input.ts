import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionRowCreateManyBelongMaterialInput } from './nutrition-row-create-many-belong-material.input';
import { Type } from 'class-transformer';

@InputType()
export class NutritionRowCreateManyBelongMaterialInputEnvelope {

    @Field(() => [NutritionRowCreateManyBelongMaterialInput], {nullable:false})
    @Type(() => NutritionRowCreateManyBelongMaterialInput)
    data!: Array<NutritionRowCreateManyBelongMaterialInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
