import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { Type } from 'class-transformer';
import { MateriaCategoryCreateWithoutLastInput } from './materia-category-create-without-last.input';

@InputType()
export class MateriaCategoryCreateOrConnectWithoutLastInput {

    @Field(() => MateriaCategoryWhereUniqueInput, {nullable:false})
    @Type(() => MateriaCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;

    @Field(() => MateriaCategoryCreateWithoutLastInput, {nullable:false})
    @Type(() => MateriaCategoryCreateWithoutLastInput)
    create!: MateriaCategoryCreateWithoutLastInput;
}
