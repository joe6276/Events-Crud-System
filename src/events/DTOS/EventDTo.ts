import {IsString , IsDateString, IsNotEmpty}  from 'class-validator'
export class EventsDTO {
    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    description:string

    @IsString()
    @IsNotEmpty()
    location:string

    @IsDateString()
    @IsNotEmpty()
    date:string

}