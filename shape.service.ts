import { Injectable } from '@nestjs/common';
import { hrtime } from 'process';
import { CreateShapeDto } from './dto/create-shape.dto';

@Injectable()
export class ShapeService {
    countCircleService(r: number){
        const area = Math.PI * r * r;
        const around = 2 * Math.PI * r;
        return{
            areaValue : area,
            aroundValue : around
        }
    }

    countRectangleService(width: number, height: number){
        const area = width * height
        const around = 2 * (width + height)
        return{
            area, around
        }
    }

    countRhombusService(d1: number, d2: number){
        const area = 0.5 * d1 * d2
        const side = Math.sqrt(Math.pow(d1 / 2, 2) + Math.pow(d2 / 2, 2))
        const around = side * 4
        return{ 
            area, around
        }
    }

    create(CreateShapeDto: CreateShapeDto){
        return 'This action adds a new shape';
    }
    
}