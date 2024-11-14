import { BodyDetailCreateWithoutUserInput } from './body-detail-create-without-user.input';
import { BodyDetailCreateOrConnectWithoutUserInput } from './body-detail-create-or-connect-without-user.input';
import { BodyDetailUpsertWithoutUserInput } from './body-detail-upsert-without-user.input';
import { BodyDetailWhereInput } from './body-detail-where.input';
import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
import { BodyDetailUpdateToOneWithWhereWithoutUserInput } from './body-detail-update-to-one-with-where-without-user.input';
export declare class BodyDetailUncheckedUpdateOneWithoutUserNestedInput {
    create?: BodyDetailCreateWithoutUserInput;
    connectOrCreate?: BodyDetailCreateOrConnectWithoutUserInput;
    upsert?: BodyDetailUpsertWithoutUserInput;
    disconnect?: BodyDetailWhereInput;
    delete?: BodyDetailWhereInput;
    connect?: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;
    update?: BodyDetailUpdateToOneWithWhereWithoutUserInput;
}
