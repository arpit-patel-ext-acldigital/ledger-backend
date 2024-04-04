import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { CategoryService } from './category.service';
import { AuthGuard } from 'src/guard/auth.guard';
import { UserService } from 'src/user/user.service';


@UseGuards(AuthGuard)
@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {};

    @Get('/list')
    async list(@Req() request: Request, @Res() response: Response): Promise<any> {
        const list = await this.categoryService.getAll();
        return {
            message: 'Category List',
            data: list
        }        
    }

    @Post('/')
    async create(@Body() body: CategoryDto, @Req() request: Request, @Res() response: Response): Promise<any> {
        const category = await this.categoryService.create({...body, createdBy: request['user']?._id});
        return {
            message: 'Category Created Successfully',
            data: category
        }
    }

    @Put('/:id')
    async update(@Body() body: CategoryDto,@Param() params: any, @Req() request: Request, @Res() response: Response): Promise<any> {
        const {id} = params
        const details = await this.categoryService.update(id, body);
        return {
            message: 'Category Updated Successfully',
            data: details
        }
    }

    @Get('/details/:id')
    async details(@Param() params: any, @Req() request: Request, @Res() response: Response): Promise<any> {
        const {id} = params
        const details = await this.categoryService.get(id);
        return {
            message: 'Category Details',
            data: details
        }
    }

    @Delete('/:id')
    async remove(@Param() params: any, @Req() request: Request, @Res() response: Response): Promise<any> {
        const {id} = params
        const details = await this.categoryService.deleteOne(id);
        return {
            message: 'Category Deleted Successfully',
            data: details
        }
    }



}
