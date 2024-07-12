import { AuthGuard } from '@config/guard/auth.guard';
import { CategoryIdFromSubDto, CreateSubCategoryDto, SubCategoryDto, SubCategoryIdDto, UpdateSubCategoryDto } from '@models/dtos/sub-category.dto';
import { Body, ConflictException, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, Req, Res, UseGuards } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';

@UseGuards(AuthGuard)
@Controller('sub-category')
export class SubCategoryController {
    constructor(private subCategoryService: SubCategoryService) { };

    @Get('/list')
    async list(@Query() query: CategoryIdFromSubDto, @Req() request: Request, @Res() response: Response): Promise<any> {
        const {categoryId} = query;
        const {_id: _authUser } : { _id: string | undefined}= request['user'];

        const list = await this.subCategoryService.getAll(categoryId, _authUser);
        return {
            message: 'SUB_CATEGORY_LIST',
            data: list
        }
    }

    @Post('/')
    async create(@Body() body: CreateSubCategoryDto, @Req() request: Request, @Res() response: Response): Promise<any> {
        const {_id: _authUser } = request['user'];
        const {name } = body;
        const isExist = await this.subCategoryService.get(_authUser, name, 'name');
        console.log('isExist', isExist);
        if(isExist) throw new ConflictException( 'SUB_CATEGORY_EXIST')
        const category = await this.subCategoryService.create({
            ...body, 
            createdBy: _authUser,
        });
        return {
            message: 'SUB_CATEGORY_CREATED',
            data: category
        }
    }

    @Put('/:id')
    async update(@Body() body: UpdateSubCategoryDto, @Param() params: any, @Req() request: Request, @Res() response: Response): Promise<any> {
        const { id } = params
        const {_id: _authUser } = request['user'];
        const isExist = await this.subCategoryService.get(_authUser, body.name, 'name');
        if (isExist) throw new ConflictException('CATEGORY_EXIST');
        const details = await this.subCategoryService.update(id, body);
        if (!details) throw new NotFoundException('CATEGORY_NOT_FOUND')
        return {
            message: 'SUB_CATEGORY_UPDATED',
            data: details
        }
    }

    @Get('/details/:id')
    async details(@Param() params: SubCategoryIdDto, @Req() request: Request, @Res() response: Response): Promise<any> {
        const {_id: _authUser } = request['user'];
        const { id } = params
        const details = await this.subCategoryService.get(_authUser, id);
        if (!details) throw new NotFoundException('CATEGORY_NOT_FOUND')
        return {
            message: 'SUB_CATEGORY',
            data: details
        }
    }

    @Delete('/:id')
    async remove(@Param() params: SubCategoryIdDto, @Req() request: Request, @Res() response: Response): Promise<any> {
        const { id } = params
        const {_id: _authUser } = request['user'];
        const details = await this.subCategoryService.deleteOne(_authUser, id);
        if (!details) throw new NotFoundException('CATEGORY_NOT_FOUND')
        return {
            message: 'SUB_CATEGORY_DELETED',
            data: details
        }
    }

}
