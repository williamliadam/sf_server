import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryCreateWithoutLastInput } from './materia-category-create-without-last.input';
import { Type } from 'class-transformer';
import { MateriaCategoryCreateOrConnectWithoutLastInput } from './materia-category-create-or-connect-without-last.input';
import { MateriaCategoryCreateManyLastInputEnvelope } from './materia-category-create-many-last-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';

@InputType()
export class MateriaCategoryUncheckedCreateNestedManyWithoutLastInput {

    @Field(() => [MateriaCategoryCreateWithoutLastInput], {nullable:true})
    @Type(() => MateriaCategoryCreateWithoutLastInput)
    create?: Array<MateriaCategoryCreateWithoutLastInput>;

    @Field(() => [MateriaCategoryCreateOrConnectWithoutLastInput], {nullable:true})
    @Type(() => MateriaCategoryCreateOrConnectWithoutLastInput)
    connectOrCreate?: Array<MateriaCategoryCreateOrConnectWithoutLastInput>;

    @Field(() => MateriaCategoryCreateManyLastInputEnvelope, {nullable:true})
    @Type(() => MateriaCategoryCreateManyLastInputEnvelope)
    createMany?: MateriaCategoryCreateManyLastInputEnvelope;

    @Field(() => [MateriaCategoryWhereUniqueInput], {nullable:true})
    @Type(() => MateriaCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>>;
}
