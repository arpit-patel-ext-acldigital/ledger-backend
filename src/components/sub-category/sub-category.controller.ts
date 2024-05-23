import { AuthGuard } from '@config/guard/auth.guard';
import { SubCategoryDto } from '@models/dtos/sub-category.dto';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, Res, UseGuards } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';

@UseGuards(AuthGuard)
@Controller('sub-category')
export class SubCategoryController {
    constructor(private subCategoryService: SubCategoryService) {};

    @Get('/list')
    async list(@Query() query: any, @Req() request: Request, @Res() response: Response): Promise<any> {
        const categoryId = query?.categoryId;
        const list = await this.subCategoryService.getAll(categoryId);
        console.log('list', list);
        return {
            message: 'Sub Category List',
            data: list
        }        
    }

    @Post('/')
    async create(@Body() body: any, @Req() request: Request, @Res() response: Response): Promise<any> {
        const category = await this.subCategoryService.create({...body, createdBy: request['user']?._id});
        return {
            message: 'Sub Category Created Successfully',
            data: category
        }
    }

    @Put('/:id')
    async update(@Body() body: SubCategoryDto,@Param() params: any, @Req() request: Request, @Res() response: Response): Promise<any> {
        const {id} = params
        const details = await this.subCategoryService.update(id, body);
        return {
            message: 'Sub Category Updated Successfully',
            data: details
        }
    }

    @Get('/details/:id')
    async details(@Param() params: any, @Req() request: Request, @Res() response: Response): Promise<any> {
        const {id} = params
        const details = await this.subCategoryService.get(id);
        return {
            message: 'Sub Category Details',
            data: details
        }
    }

    @Delete('/:id')
    async remove(@Param() params: any, @Req() request: Request, @Res() response: Response): Promise<any> {
        const {id} = params
        const details = await this.subCategoryService.deleteOne(id);
        return {
            message: 'Sub Category Deleted Successfully',
            data: details
        }
    }

}
