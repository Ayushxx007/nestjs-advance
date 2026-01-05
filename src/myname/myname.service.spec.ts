import { Test, TestingModule } from '@nestjs/testing';
import { MynameService } from './myname.service';

describe('MynameService', () => {
  let service: MynameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MynameService],
    }).compile();

    service = module.get<MynameService>(MynameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
