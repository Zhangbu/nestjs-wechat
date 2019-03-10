import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cat/cats.module';
import { WechatModule } from './wechat/wechat.module';
// import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [CatsModule,
    WechatModule,
    // TypeOrmModule.forRoot({
    //   type:'mysql',
    //   host:'localhost'
    // }
    // )
  ],
})
export class AppModule {}
