import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CalentamientoDTO } from './interface/calentamiento.inteface';

import { CreateCalentamientoDTO } from './dto/calentamineto.dto';

@Injectable()
export class CalentamientoService {
  constructor(
    @InjectModel('calentamiento')
    private readonly calentamientoModel: Model<CalentamientoDTO>,
  ) {}

  async getCalentamientos(): Promise<CalentamientoDTO[]> {
    return await this.calentamientoModel.find().exec();
  }

  async getCalentamiento(id: string): Promise<CalentamientoDTO> {
    const calentamiento = await this.calentamientoModel.findById(id).exec();
    if (!calentamiento) {
      throw new NotFoundException(
        `No se encontró un calentamiento con ID: ${id}`,
      );
    }
    return calentamiento;
  }

  async createCalentamiento(
    createDto: CreateCalentamientoDTO,
  ): Promise<CalentamientoDTO> {
    const nuevo = new this.calentamientoModel(createDto);
    return await nuevo.save();
  }

  async deleteCalentamiento(id: string): Promise<CalentamientoDTO> {
    const eliminado = await this.calentamientoModel
      .findByIdAndDelete(id)
      .exec();
    if (!eliminado) {
      throw new NotFoundException(
        `No se pudo eliminar, no se encontró el calentamiento con ID: ${id}`,
      );
    }
    return eliminado;
  }

  async updateCalentamiento(
    id: string,
    updateDto: CreateCalentamientoDTO,
  ): Promise<CalentamientoDTO> {
    const actualizado = await this.calentamientoModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
    if (!actualizado) {
      throw new NotFoundException(
        `No se pudo actualizar, no se encontró el calentamiento con ID: ${id}`,
      );
    }
    return actualizado;
  }
}
