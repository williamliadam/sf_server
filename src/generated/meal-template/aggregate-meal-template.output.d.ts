import { MealTemplateCountAggregate } from './meal-template-count-aggregate.output';
import { MealTemplateAvgAggregate } from './meal-template-avg-aggregate.output';
import { MealTemplateSumAggregate } from './meal-template-sum-aggregate.output';
import { MealTemplateMinAggregate } from './meal-template-min-aggregate.output';
import { MealTemplateMaxAggregate } from './meal-template-max-aggregate.output';
export declare class AggregateMealTemplate {
    _count?: MealTemplateCountAggregate;
    _avg?: MealTemplateAvgAggregate;
    _sum?: MealTemplateSumAggregate;
    _min?: MealTemplateMinAggregate;
    _max?: MealTemplateMaxAggregate;
}
