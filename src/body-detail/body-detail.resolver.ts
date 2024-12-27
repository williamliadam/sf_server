import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BodyDetail } from '../@generated/body-detail/body-detail.model';
import { CurrentUser } from '../auth/decorators/user.decorator.graphql';
import { BodyDetailService } from './body-detail.service';
import { BodyDetailCreateWithoutUserInput } from '../@generated/body-detail/body-detail-create-without-user.input';
import { CurrentUserDto } from '../auth/dto/current-user.dto';

@Resolver(() => BodyDetail)
export class BodyDetailResolver {
  constructor(private readonly bodyDetailService: BodyDetailService) { }

  @Query(() => BodyDetail, { nullable: true })
  getBodyDetail(@CurrentUser() user: CurrentUserDto) {
    return this.bodyDetailService.getBodyDetail(user.userId)
  }

  @Mutation(() => BodyDetail, { nullable: true })
  async setBodyDetail(@Args("selfBodyDetail") arg: BodyDetailCreateWithoutUserInput, @CurrentUser() user: CurrentUserDto) {
    const id = user.userId;
    const bodyDetail = await this.bodyDetailService.setBodyDetail({ userId: id, ...arg })
    const matures = this.bodyDetailService.calculationBodyDetail(bodyDetail)
    return this.bodyDetailService.setBodyDetail({ userId: id, ...arg, ...matures })
  }
}
