import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryCreateWithoutNextInput } from './materia-category-create-without-next.input';
import { Type } from 'class-transformer';
import { MateriaCategoryCreateOrConnectWithoutNextInput } from './materia-category-create-or-connect-without-next.input';
import { MateriaCategoryUpsertWithoutNextInput } from './materia-category-upsert-without-next.input';
import { MateriaCategoryWhereInput } from './materia-category-where.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { MateriaCategoryUpdateToOneWithWhereWithoutNextInput } from './materia-category-update-to-one-with-where-without-next.input';

@InputType()
export class MateriaCategoryUpdateOneWithoutNextNestedInput {

    @Field(() => MateriaCategoryCreateWithoutNextInput, {nullable:true})
    @Type(() => MateriaCategoryCreateWithoutNextInput)
    create?: MateriaCategoryCreateWithoutNextInput;

    @Field(() => MateriaCategoryCreateOrConnectWithoutNextInput, {nullable:true})
    @Type(() => MateriaCategoryCreateOrConnectWithoutNextInput)
    connectOrCreate?: MateriaCategoryCreateOrConnectWithoutNextInput;

    @Field(() => MateriaCategoryUpsertWithoutNextInput, {nullable:true})
    @Type(() => MateriaCategoryUpsertWithoutNextInput)
    upsert?: MateriaCategoryUpsertWithoutNextInput;

    @Field(() => MateriaCategoryWhereInput, {nullable:true})
    @Type(() => MateriaCategoryWhereInput)
    disconnect?: MateriaCategoryWhereInput;

    @Field(() => MateriaCategoryWhereInput, {nullable:true})
    @Type(() => MateriaCategoryWhereInput)
    delete?: MateriaCategoryWhereInput;

    @Field(() => MateriaCategoryWhereUniqueInput, {nullable:true})
    @Type(() => MateriaCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;

    @Field(() => MateriaCategoryUpdateToOneWithWhereWithoutNextInput, {nullable:true})
    @Type(() => MateriaCategoryUpdateToOneWithWhereWithoutNextInput)
    update?: MateriaCategoryUpdateToOneWithWhereWithoutNextInput;
}
