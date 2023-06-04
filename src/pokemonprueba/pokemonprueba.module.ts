import { Module } from '@nestjs/common';
import { PokemonpruebaService } from './pokemonprueba.service';
import { PokemonpruebaController } from './pokemonprueba.controller';

@Module({
  controllers: [PokemonpruebaController],
  providers: [PokemonpruebaService]
})
export class PokemonpruebaModule {}
