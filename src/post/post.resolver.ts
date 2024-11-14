import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from 'src/@generated/post/post.model';
import { FindUniquePostArgs } from 'src/@generated/post/find-unique-post.args';



@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) { }

  @Query(() => Post)
  async getPost(@Args() args: FindUniquePostArgs) {
    this.postService.findUnique(args)
  }
}
