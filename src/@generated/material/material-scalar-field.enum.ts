import { registerEnumType } from '@nestjs/graphql';

export enum MaterialScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    nickName = "nickName",
    materiaCategoryId = "materiaCategoryId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(MaterialScalarFieldEnum, { name: 'MaterialScalarFieldEnum', description: undefined })
