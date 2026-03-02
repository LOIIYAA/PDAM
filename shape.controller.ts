import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ShapeService } from './shape.service';
import { CreateShapeDto } from './dto/create-shape.dto';

@Controller('shape')
export class ShapeController {
    // call shapeservice
    constructor(
        private readonly shapeService: ShapeService
    ) { }

    @Get(`rectangle`)
    countRectangle(
        @Query() requestData: {width: string, height: string}
    ) {
        const { width, height} = requestData
        return this.shapeService.countRectangleService(+width, +height)
        
    }

    // define method of requestcl
    @Get(`:radius`)
    countCircle(@Param(`radius`) r: string) {
        return this.shapeService.countCircleService(+r)
    }

    @Post(`rhombus`)
    countRhombus(@Body() requestData: {d1: string, d2: string}
    ){
        const {d1, d2} = requestData
        return this.shapeService.countRhombusService(+d1, +d2)
    }
    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() CreateShapeDto: CreateShapeDto){
    return this.shapeService.create(CreateShapeDto);
    }
}