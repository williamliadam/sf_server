import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialWhereInput } from './material-where.input';
import { Type } from 'class-transformer';
import { MaterialOrderByWithRelationInput } from './material-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MaterialScalarFieldEnum } from './material-scalar-field.enum';

@ArgsType()
export class FindFirstMaterialOrThrowArgs {

    @Field(() => MaterialWhereInput, {nullable:true})
    @Type(() => MaterialWhereInput)
    where?: MaterialWhereInput;

    @Field(() => [MaterialOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MaterialOrderByWithRelationInput>;

    @Field(() => MaterialWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MaterialScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MaterialScalarFieldEnum>;
}
