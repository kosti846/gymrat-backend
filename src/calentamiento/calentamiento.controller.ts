import { Controller, Post, HttpStatus, Res, Body } from '@nestjs/common';
import { Response } from 'express';

import { CreateCalentamientoDTO } from './dto/calentamineto.dto';
import { CalentamientoService } from './calentamiento.service';

@Controller('calentamiento')
export class CalentamientoController {
  constructor(private readonly calentamientoService: CalentamientoService) {}

  @Post('/create')
  async createCalentamiento(
    @Res() res: Response,
    @Body() createDto: CreateCalentamientoDTO,
  ) {
    const nuevoCalentamiento = await this.calentamientoService.createCalentamiento(createDto);
    return res
      .status(HttpStatus.OK)
      .json({ mensaje: 'calentamiento creado', data: nuevoCalentamiento });
  }
}
