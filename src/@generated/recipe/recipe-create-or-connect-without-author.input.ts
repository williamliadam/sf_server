import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutAuthorInput } from './recipe-create-without-author.input';

@InputType()
export class RecipeCreateOrConnectWithoutAuthorInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

    @Field(() => RecipeCreateWithoutAuthorInput, {nullable:false})
    @Type(() => RecipeCreateWithoutAuthorInput)
    create!: RecipeCreateWithoutAuthorInput;
}
