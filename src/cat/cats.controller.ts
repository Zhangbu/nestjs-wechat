import {Controller,Get,Req, Res,Post,Body,HttpStatus} from '@nestjs/common';
import { finished } from 'stream';
import { create } from 'domain';
import {CreateCatDto} from './dto/create-cat.dto'

@Controller('cats')
export class CatsController {
    @Get()
    async finished(@Req() request):Promise<any[]>{
        return ['This action returns all cats'];
    }

    @Post()
    async create(@Res() res,@Body() createCatDto:CreateCatDto){
        // res.status(HttpStatus.CREATED).send('ferfer');
        return {"data":"one cute cat"};
    }
}