import {Injectable} from '@nestjs/common'
import {PassportStrategy} from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import * as dotenv from 'dotenv'
dotenv.config()
export class JTWStrategy extends PassportStrategy(Strategy){


    constructor(){
        super({
            secretOrKey:process.env.SECRET,
            ignoreExpiration:false,
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload:any){
        return payload
    }
}