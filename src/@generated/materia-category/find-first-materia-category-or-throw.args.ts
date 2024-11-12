import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaCategoryWhereInput } from './materia-category-where.input';
import { Type } from 'class-transformer';
import { MateriaCategoryOrderByWithRelationInput } from './materia-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MateriaCategoryScalarFieldEnum } from './materia-category-scalar-field.enum';

@ArgsType()
export class FindFirstMateriaCategoryOrThrowArgs {

    @Field(() => MateriaCategoryWhereInput, {nullable:true})
    @Type(() => MateriaCategoryWhereInput)
    where?: MateriaCategoryWhereInput;

    @Field(() => [MateriaCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MateriaCategoryOrderByWithRelationInput>;

    @Field(() => MateriaCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MateriaCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MateriaCategoryScalarFieldEnum>;
}
