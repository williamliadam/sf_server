import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneWithoutMyPostsNestedInput } from '../user/user-update-one-without-my-posts-nested.input';
export declare class PostUpdateInput {
    title?: StringFieldUpdateOperationsInput;
    content?: NullableStringFieldUpdateOperationsInput;
    stars?: NullableIntFieldUpdateOperationsInput;
    published?: NullableBoolFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    author?: UserUpdateOneWithoutMyPostsNestedInput;
}
