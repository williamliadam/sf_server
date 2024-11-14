import { BodyDetailCreateWithoutUserInput } from './body-detail-create-without-user.input';
import { BodyDetailCreateOrConnectWithoutUserInput } from './body-detail-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
export declare class BodyDetailUncheckedCreateNestedOneWithoutUserInput {
    create?: BodyDetailCreateWithoutUserInput;
    connectOrCreate?: BodyDetailCreateOrConnectWithoutUserInput;
    connect?: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;
}
