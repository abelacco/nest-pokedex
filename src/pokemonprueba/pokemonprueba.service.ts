import { Injectable } from '@nestjs/common';
import { CreatePokemonpruebaDto } from './dto/create-pokemonprueba.dto';
import { UpdatePokemonpruebaDto } from './dto/update-pokemonprueba.dto';

@Injectable()
export class PokemonpruebaService {
  create(createPokemonpruebaDto: CreatePokemonpruebaDto) {
    return 'This action adds a new pokemonprueba';
  }

  findAll() {
    return `This action returns all pokemonprueba`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemonprueba`;
  }

  update(id: number, updatePokemonpruebaDto: UpdatePokemonpruebaDto) {
    return `This action updates a #${id} pokemonprueba`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemonprueba`;
  }
}
