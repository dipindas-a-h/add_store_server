import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  constructor(private readonly prisma: PrismaClient) {}

  get client() {
    return this.prisma;
  }
}