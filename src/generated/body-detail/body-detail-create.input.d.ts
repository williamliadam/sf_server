import { UserCreateNestedOneWithoutBodyDetailInput } from '../user/user-create-nested-one-without-body-detail.input';
export declare class BodyDetailCreateInput {
    weight?: number;
    height?: number;
    age?: number;
    bmi?: number;
    bmr?: number;
    tdee?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutBodyDetailInput;
}
