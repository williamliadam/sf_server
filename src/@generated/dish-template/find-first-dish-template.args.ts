import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTemplateWhereInput } from './dish-template-where.input';
import { Type } from 'class-transformer';
import { DishTemplateOrderByWithRelationInput } from './dish-template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DishTemplateScalarFieldEnum } from './dish-template-scalar-field.enum';

@ArgsType()
export class FindFirstDishTemplateArgs {

    @Field(() => DishTemplateWhereInput, {nullable:true})
    @Type(() => DishTemplateWhereInput)
    where?: DishTemplateWhereInput;

    @Field(() => [DishTemplateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DishTemplateOrderByWithRelationInput>;

    @Field(() => DishTemplateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DishTemplateScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DishTemplateScalarFieldEnum>;
}
