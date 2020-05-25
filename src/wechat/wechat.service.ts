import { Injectable } from '@nestjs/common';

@Injectable()
export class WechatService {
  getHello(): string {
    return 'Hello zjx!';
  }

  wechatCheck(echostr) {
    return echostr;
  }
}
