import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { ForbiddenException } from '@nestjs/common/exceptions/forbidden.exception';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserShopGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { user, params } = context.switchToHttp().getRequest();
    const { shopId } = params;
    // find shop by id
    const shop = await this.prisma.shops.findUnique({
      where: { id: parseInt(shopId) },
    });
    // if shop not found throw not found exception
    if (!shop) {
      throw new NotFoundException('Shop not found');
    }
    // if shop found and user id not equal to shop user id throw forbidden exception
    if (shop && user.id !== shop.userId) {
      throw new ForbiddenException("You don't have access to this shop");
    }
    // if shop found and user id equal to shop user id return true
    return true;
  }
}
