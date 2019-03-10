import { Controller, Get, Req, Res, Post, Body, HttpStatus,Param } from '@nestjs/common';
import { finished } from 'stream';
import { create } from 'domain';


@Controller('wechat')
export class WechatController {
    @Get()
    async checkwx(@Param('echostr') echostr,@Req() request): Promise<any[]> {
        var a = request.query.echostr;
        console.log(request.query.echostr)
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