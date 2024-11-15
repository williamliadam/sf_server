import { Injectable } from '@nestjs/common';
import { BodyDetail, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BodyDetailService {
  constructor(private readonly prisma: PrismaService) { }

  getBodyDetail(userId: number) {
    return this.prisma.bodyDetail.findUnique({
      where: {
        userId
      }
    })
  }

  setBodyDetail(params: Prisma.BodyDetailUncheckedCreateInput) {
    return this.prisma.bodyDetail.upsert({
      where: {
        userId: params.userId
      },
      update: {
        ...params
      },
      create: {
        ...params
      }
    })
  }
  calculationBodyDetail(params: BodyDetail) {
    const bmr = params.weight * 10 + 6.25 * params.height - 5 * params.age + 5;
    const bmi = params.weight / ((params.height / 100) ** 2);
    const tdee = bmr * 1.6;
    return { bmi, bmr, tdee }
  }
}
