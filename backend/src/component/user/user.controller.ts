import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { isEmail } from 'class-validator';
import { Request, Response } from 'express';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UserProfileDto } from './dto/user-profile.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getUserProfile/:email')
  async checkAndGet(
    @Param('email') email: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    console.log('UserController.checkAndGet');
    if (!email) throw new NotFoundException();
    const user = await this.userService.checkAndGet(email);
    res.cookie('email', user.email, {
      httpOnly: false,
      maxAge: 60 * 60 * 1000 * 24,
      signed: true,
    });
    console.error('return', user);
    return user;
  }

  @Put('updateProfile')
  updateProfile(@Body() userProfile: UpdateProfileDto, @Req() req: Request) {
    if (!req.signedCookies.email || !isEmail(req.signedCookies.email))
      throw new NotFoundException();
    return this.userService.updateProgress(
      userProfile,
      req.signedCookies.email,
    );
  }
}
