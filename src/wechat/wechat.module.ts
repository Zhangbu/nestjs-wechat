import {Module} from '@nestjs/common';
import {WechatController} from './wechat.controller';
import {WechatService} from './wechat.service';

@Module({
    controllers:[WechatController],
    providers:[WechatService],
    exports:[WechatService]
})

export class WechatModule{}        