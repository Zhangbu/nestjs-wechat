import { Controller, Get,Post,Res, HttpStatus, Param, Query } from '@nestjs/common';
import { Response } from 'express';
import { WechatService } from './wechat.service';

@Controller("wechat")
export class WechatController {
  constructor(private readonly wechatService: WechatService) {}

  @Get()
  getHello(@Res() res: Response) {
    // return this.wechatService.getHello();
    res.status(HttpStatus.OK).send("zjxnb");
  }

  //微信公众号检验接口
  @Get("check")
  wechatCheck(@Query("echostr") echostr): string {
      console.log(echostr)

    var str = this.wechatService.wechatCheck(echostr);
    return str;
  }

  @Post("check")
  wechatPostCheck(@Query("echostr") echostr): string {
      console.log(echostr)

    var str = this.wechatService.wechatCheck(echostr);
    return str;
  }
}
