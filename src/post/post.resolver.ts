import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from 'src/@generated/post/post.model';
import { FindUniquePostArgs } from 'src/@generated/post/find-unique-post.args';
import { Logger, UseGuards } from '@nestjs/common';
import { JwtGraphqlAuthGuard } from 'src/auth/guards/jwt-graphql-auth.guard';
import { Public } from 'src/auth/decorators/public.decorator';

@Public()
@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) { }
  private readonly postLogger = new Logger()

  @UseGuards(JwtGraphqlAuthGuard)
  @Query(() => Post, { nullable: true })
  async getPost(@Args() args: FindUniquePostArgs) {
    this.postLogger.log(args)
    return this.postService.findUnique({
      ...args, include: {
        author: true
      }
    })
  }
}
