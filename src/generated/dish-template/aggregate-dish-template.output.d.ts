import { DishTemplateCountAggregate } from './dish-template-count-aggregate.output';
import { DishTemplateAvgAggregate } from './dish-template-avg-aggregate.output';
import { DishTemplateSumAggregate } from './dish-template-sum-aggregate.output';
import { DishTemplateMinAggregate } from './dish-template-min-aggregate.output';
import { DishTemplateMaxAggregate } from './dish-template-max-aggregate.output';
export declare class AggregateDishTemplate {
    _count?: DishTemplateCountAggregate;
    _avg?: DishTemplateAvgAggregate;
    _sum?: DishTemplateSumAggregate;
    _min?: DishTemplateMinAggregate;
    _max?: DishTemplateMaxAggregate;
}
