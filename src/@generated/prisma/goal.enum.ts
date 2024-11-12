import { registerEnumType } from '@nestjs/graphql';

export enum Goal {
    KEEP = "KEEP",
    BULKING = "BULKING",
    SLIMING = "SLIMING"
}


registerEnumType(Goal, { name: 'Goal', description: undefined })
