import { Test, TestingModule } from '@nestjs/testing';
import { BodyDetailService } from './body-detail.service';

describe('BodyDetailService', () => {
  let service: BodyDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BodyDetailService],
    }).compile();

    service = module.get<BodyDetailService>(BodyDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
