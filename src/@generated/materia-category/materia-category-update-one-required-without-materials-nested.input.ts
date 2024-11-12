import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryCreateWithoutMaterialsInput } from './materia-category-create-without-materials.input';
import { Type } from 'class-transformer';
import { MateriaCategoryCreateOrConnectWithoutMaterialsInput } from './materia-category-create-or-connect-without-materials.input';
import { MateriaCategoryUpsertWithoutMaterialsInput } from './materia-category-upsert-without-materials.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { MateriaCategoryUpdateToOneWithWhereWithoutMaterialsInput } from './materia-category-update-to-one-with-where-without-materials.input';

@InputType()
export class MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput {

    @Field(() => MateriaCategoryCreateWithoutMaterialsInput, {nullable:true})
    @Type(() => MateriaCategoryCreateWithoutMaterialsInput)
    create?: MateriaCategoryCreateWithoutMaterialsInput;

    @Field(() => MateriaCategoryCreateOrConnectWithoutMaterialsInput, {nullable:true})
    @Type(() => MateriaCategoryCreateOrConnectWithoutMaterialsInput)
    connectOrCreate?: MateriaCategoryCreateOrConnectWithoutMaterialsInput;

    @Field(() => MateriaCategoryUpsertWithoutMaterialsInput, {nullable:true})
    @Type(() => MateriaCategoryUpsertWithoutMaterialsInput)
    upsert?: MateriaCategoryUpsertWithoutMaterialsInput;

    @Field(() => MateriaCategoryWhereUniqueInput, {nullable:true})
    @Type(() => MateriaCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;

    @Field(() => MateriaCategoryUpdateToOneWithWhereWithoutMaterialsInput, {nullable:true})
    @Type(() => MateriaCategoryUpdateToOneWithWhereWithoutMaterialsInput)
    update?: MateriaCategoryUpdateToOneWithWhereWithoutMaterialsInput;
}
