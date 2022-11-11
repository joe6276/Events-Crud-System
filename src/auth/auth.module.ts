import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStartegy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt/dist';
import { JTWStrategy } from './jwt.strategy';
@Module({
  imports:[ forwardRef(() =>UsersModule), 
  JwtModule.register({
    secret:process.env.SECRET,
    signOptions:{expiresIn:'60000000s'}
  })
  ],
  providers: [AuthService, LocalStartegy,JTWStrategy],
  exports:[AuthService]
})
export class AuthModule {}
