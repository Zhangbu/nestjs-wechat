import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WechatController } from './wechat/wechat.controller';
import { WechatService } from './wechat/wechat.service';

@Module({
  imports: [],
  controllers: [AppController,WechatController],
  providers: [AppService,WechatService],
})
export class AppModule {}
