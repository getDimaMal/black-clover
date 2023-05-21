import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { JwtDto } from './dtos/jwt.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor(private usersService: UsersService, private configService: ConfigService) {
    super({
      secretOrKey: configService.get('NX_JWT_SECRET'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate({ email }: JwtDto): Promise<User> {
    this.logger.verbose(`Validate JWT with: ${JSON.stringify({ email })}`);
    const user = await this.usersService.findOne({ email });

    if (!user) throw new UnauthorizedException();
    return user;
  }
}
