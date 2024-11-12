import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Goal } from './goal.enum';

@InputType()
export class EnumGoalFieldUpdateOperationsInput {

    @Field(() => Goal, {nullable:true})
    set?: keyof typeof Goal;
}
