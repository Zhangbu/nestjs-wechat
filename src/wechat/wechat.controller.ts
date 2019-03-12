import { Controller, Get, Req, Res, Post, Body, HttpStatus,Param } from '@nestjs/common';
import { finished } from 'stream';
import { create } from 'domain';


@Controller('wechat')
export class WechatController {
    @Get('/checkwx')
    async checkwx(@Param('echostr') echostr,@Req() request): Promise<any[]> {
        var a = echostr;
        console.log(echostr)
        return a;
    }

    @Post()
    async create(@Req() request) {
        console.log("这里是post的方法，为了获取微信的消息")

        let wxEventMsg = await new Promise(function (resolve, reject) {
            let buf = ''
            request.setEncoding('utf8')
            request.on('data', (chunk) => {
                buf += chunk
            })
            request.on('end', () => {
                resolve(buf)
            })
        })
        console.log(wxEventMsg);
        
        return 'success';
    }
}