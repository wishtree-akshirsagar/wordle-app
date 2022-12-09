import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './component/user/user.module';
import { DbConfigModule } from './config/db.config.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot(), DbConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
