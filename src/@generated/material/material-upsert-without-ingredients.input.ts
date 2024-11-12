import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialUpdateWithoutIngredientsInput } from './material-update-without-ingredients.input';
import { Type } from 'class-transformer';
import { MaterialCreateWithoutIngredientsInput } from './material-create-without-ingredients.input';
import { MaterialWhereInput } from './material-where.input';

@InputType()
export class MaterialUpsertWithoutIngredientsInput {

    @Field(() => MaterialUpdateWithoutIngredientsInput, {nullable:false})
    @Type(() => MaterialUpdateWithoutIngredientsInput)
    update!: MaterialUpdateWithoutIngredientsInput;

    @Field(() => MaterialCreateWithoutIngredientsInput, {nullable:false})
    @Type(() => MaterialCreateWithoutIngredientsInput)
    create!: MaterialCreateWithoutIngredientsInput;

    @Field(() => MaterialWhereInput, {nullable:true})
    @Type(() => MaterialWhereInput)
    where?: MaterialWhereInput;
}
