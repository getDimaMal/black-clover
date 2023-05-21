import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { User } from './entity/user.entity';

export const GetUser = createParamDecorator((_, ctx: ExecutionContext): User => {
  const rec = ctx.switchToHttp().getRequest();
  return rec.user;
});