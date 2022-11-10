import{ Injectable, UnauthorizedException} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStartegy extends PassportStrategy(Strategy) {
  constructor(private authService:AuthService){
    super()
  }
  async validate(username:string, password:string){
    const user = await this.authService.validateuser(username,password);

    if(!user){
        throw new UnauthorizedException()
    }
    return user
  }


}