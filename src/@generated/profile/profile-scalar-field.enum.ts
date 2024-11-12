import { registerEnumType } from '@nestjs/graphql';

export enum ProfileScalarFieldEnum {
    id = "id",
    avatar = "avatar",
    nickName = "nickName",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    goal = "goal"
}


registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined })
