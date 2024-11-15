import { Test, TestingModule } from '@nestjs/testing';
import { BodyDetailResolver } from './body-detail.resolver';

describe('BodyDetailResolver', () => {
  let resolver: BodyDetailResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BodyDetailResolver],
    }).compile();

    resolver = module.get<BodyDetailResolver>(BodyDetailResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
