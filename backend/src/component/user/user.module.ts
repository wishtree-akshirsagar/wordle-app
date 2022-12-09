import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UsersSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, ProfilesSchema } from './entities/profile.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
    MongooseModule.forFeature([{ name: Profile.name, schema: ProfilesSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
