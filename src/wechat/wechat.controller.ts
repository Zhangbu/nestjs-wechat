import { Controller, Get, Req, Res, Post, Body, HttpStatus } from '@nestjs/common';
import { finished } from 'stream';
import { create } from 'domain';


@Controller('wechat')
export class WechatController {
    @Get()
    async checkwx(@Req() request): Promise<any[]> {
        var a: any = true;
        return a;
    }

    @Post()
    async create(@Req() request) {
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