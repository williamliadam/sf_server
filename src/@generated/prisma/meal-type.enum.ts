import { registerEnumType } from '@nestjs/graphql';

export enum MealType {
	BREAKFAST = 'BREAKFAST',
	LUNCH = 'LUNCH',
	DINNER = 'DINNER',
	MEAL = 'MEAL',
}

registerEnumType(MealType, { name: 'MealType', description: undefined });
