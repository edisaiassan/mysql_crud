import {
  IsString,
  IsInt,
  MinLength,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class CreateCatDto {
  @IsString() //de tipo String
  @MinLength(1) //Mínimo de 1 caracter
  name: string;

  @IsInt()
  @IsPositive()
  age: number;

  @IsString()
  @IsOptional()
  breed?: string;
}
