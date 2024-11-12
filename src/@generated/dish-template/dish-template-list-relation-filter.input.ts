import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishTemplateWhereInput } from './dish-template-where.input';

@InputType()
export class DishTemplateListRelationFilter {

    @Field(() => DishTemplateWhereInput, {nullable:true})
    every?: DishTemplateWhereInput;

    @Field(() => DishTemplateWhereInput, {nullable:true})
    some?: DishTemplateWhereInput;

    @Field(() => DishTemplateWhereInput, {nullable:true})
    none?: DishTemplateWhereInput;
}
