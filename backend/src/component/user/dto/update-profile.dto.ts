import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @IsNotEmpty()
  attemptedWord: string;

  @IsArray()
  @IsString({ each: true })
  @ArrayNotEmpty()
  attempts: string[];
}
