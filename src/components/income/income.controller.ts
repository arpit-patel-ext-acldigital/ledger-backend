import { CategoryService } from '@components/category/category.service';
import { AuthGuard } from '@config/guard/auth.guard';
import { CreateCategoryDto, UpdateCategoryDto, CategoryIdDto } from '@models/dtos/category.dto';
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { IncomeService } from './income.service';
import { IncomeHistoryService } from '@components/income-history/income-history.service';
import { CreateIncomeDto } from '@models/dtos/incomes.dto';

@UseGuards(AuthGuard)
@Controller('income')
export class IncomeController {
    constructor(private incomeService: IncomeService, private incomeHistoryService: IncomeHistoryService) {};

    @Get('/list')
    async incomeList(@Req() request: Request, @Res() response: Response): Promise<any> {
        const {_id: _authUser } = request['user'];
        // const list = await this.incomeService.getAll(_authUser);
        // return {
        //     message: 'Category List',
        //     data: list
        // }        
    }

    @Get('/auto/list')
    async autoIncomeList(@Req() request: Request, @Res() response: Response): Promise<any> {
        const {_id: _authUser } = request['user'];
        // const list = await this.incomeService.getAll(_authUser);
        // return {
        //     message: 'Category List',
        //     data: list
        // }        
    }


    @Post('/auto')
    async createAutoIncome(@Body() body: CreateIncomeDto, @Req() request: Request,  @Res() response: Response): Promise<any> {
        const {_id: _authUser } = request['user'];
        body.time = body.time || Date();
        const income = await this.incomeService.create({
            ...body,
            createdBy: _authUser,
        });
        return {
            message: 'INCOME_ADDED',
            data: income
        }
    }


    @Post('/')
    async createIncome(@Body() body: CreateIncomeDto, @Req() request: Request,  @Res() response: Response): Promise<any> {
        const {_id: _authUser } = request['user'];
        body.time = body.time || Date();
        const income = await this.incomeHistoryService.create({
            ...body,
            createdBy: _authUser,
        });
        return {
            message: 'INCOME_ADDED',
            data: income
        }
    }
    
    
    // @Put('/:id')
    // async update(@Body() body: UpdateCategoryDto ,@Param() params: CategoryIdDto, @Req() request: Request, @Res() response: Response): Promise<any> {
    //     const {id} = params
    //     const details = await this.categoryService.update(id, body);
    //     return {
    //         message: 'Category Updated Successfully',
    //         data: details
    //     }
    // }

    // @Get('/details/:id')
    // async details(@Param() params: CategoryIdDto, @Req() request: Request,  @Res() response: Response): Promise<any> {
    //     const {_id: _authUser } = request['user'];
    //     const {id} = params
    //     const details = await this.categoryService.get(_authUser, id);
    //     return {
    //         message: 'Category Details',
    //         data: details
    //     }
    // }

    // @Delete('/:id')
    // async remove(@Param() params: CategoryIdDto, @Req() request: Request,  @Res() response: Response): Promise<any> {
    //     const {id} = params
    //     const details = await this.categoryService.deleteOne(id);
    //     if (details) {
    //         return {
    //             message: 'Category Deleted Successfully',
    //             data: details
    //         }    
    //     } else {
    //         throw new NotFoundException('Category Not Found')
    //     }
    // }

}
