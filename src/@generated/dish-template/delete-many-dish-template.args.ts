import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTemplateWhereInput } from './dish-template-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDishTemplateArgs {

    @Field(() => DishTemplateWhereInput, {nullable:true})
    @Type(() => DishTemplateWhereInput)
    where?: DishTemplateWhereInput;
}
