import { Module } from '@nestjs/common';
import { BodyDetailService } from './body-detail.service';
import { BodyDetailResolver } from './body-detail.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [BodyDetailService, BodyDetailResolver, PrismaService]
})
export class BodyDetailModule { }
