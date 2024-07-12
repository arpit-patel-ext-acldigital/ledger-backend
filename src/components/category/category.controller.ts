import { Body, ConflictException, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, Req, Res, UseGuards } from '@nestjs/common';
import { CategoryFiltersDto, CategoryIdDto, CreateCategoryDto, UpdateCategoryDto } from '@models/dtos/category.dto';
import { CategoryService } from './category.service';
import { AuthGuard } from '@config/guard/auth.guard';


@UseGuards(AuthGuard)
@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {};

    @Get('/list')
    async list(@Query() query: CategoryFiltersDto, @Req() request: Request, @Res() response: Response): Promise<any> {
        const {_id: _authUser } = request['user'];
        const list = await this.categoryService.getAll(_authUser, query);
        return {
            message: 'CATEGORY_LIST',
            data: list
        }        
    }

    @Post('/')
    async create(@Body() body: CreateCategoryDto, @Req() request: Request,  @Res() response: Response): Promise<any> {
        const {_id: _authUser } = request['user'];

        const isExist = await this.categoryService.get(_authUser, body.name, 'name');
        if (isExist) throw new ConflictException('CATEGORY_EXIST');
        const category = await this.categoryService.create({
            ...body,
            createdBy: _authUser,
            isActive: false,
        });
        return {
            message: 'CATEGORY_CREATED',
            data: category
        }
    }

    @Put('/:id')
    async update(@Body() body: UpdateCategoryDto ,@Param() params: CategoryIdDto, @Req() request: Request, @Res() response: Response): Promise<any> {
        const {_id: _authUser } = request['user'];
        const {id} = params;
        const isExist = await this.categoryService.get(_authUser, body.name, 'name');
        if (isExist) throw new ConflictException('CATEGORY_EXIST');
        const details = await this.categoryService.update(id, body);
        if (!details) throw new NotFoundException('CATEGORY_NOT_FOUND')
        return {
            message: 'CATEGORY_UPDATED',
            data: details
        }
    }

    @Get('/details/:id')
    async details(@Param() params: CategoryIdDto, @Req() request: Request,  @Res() response: Response): Promise<any> {
        const {_id: _authUser } = request['user'];
        const {id} = params
        const details = await this.categoryService.get(_authUser, id);
        return {
            message: 'CATEGORY_DETAILS',
            data: details
        }
    }

    @Delete('/:id')
    async remove(@Param() params: CategoryIdDto, @Req() request: Request,  @Res() response: Response): Promise<any> {
        const {id} = params
        const {_id: _authUser } = request['user'];
        const details = await this.categoryService.deleteOne(_authUser, id);
        if (details) {
            return {
                message: 'CATEGORY_DELETED',
                data: details
            }    
        } else {
            throw new NotFoundException('CATEGORY_NOT_FOUND')
        }
    }

}
