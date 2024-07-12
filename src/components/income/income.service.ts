import constants from '@config/constants';
import { CreateIncomeDto, IncomesDto } from '@models/dtos/incomes.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class IncomeService {

    constructor(@InjectModel(constants.MODELS.INCOMES) private incomeModel : Model<IncomesDto>) {}

    async create(data: CreateIncomeDto): Promise<IncomesDto> {
        const newDoc = new this.incomeModel(data);
        return (await newDoc.save()).toJSON()
    }
    
}
