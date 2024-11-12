import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaUnitCreateManyInput } from './materia-unit-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMateriaUnitArgs {

    @Field(() => [MateriaUnitCreateManyInput], {nullable:false})
    @Type(() => MateriaUnitCreateManyInput)
    data!: Array<MateriaUnitCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
