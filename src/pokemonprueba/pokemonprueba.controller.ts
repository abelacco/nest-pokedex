import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonpruebaService } from './pokemonprueba.service';
import { CreatePokemonpruebaDto } from './dto/create-pokemonprueba.dto';
import { UpdatePokemonpruebaDto } from './dto/update-pokemonprueba.dto';

@Controller('pokemonprueba')
export class PokemonpruebaController {
  constructor(private readonly pokemonpruebaService: PokemonpruebaService) {}

  @Post()
  create(@Body() createPokemonpruebaDto: CreatePokemonpruebaDto) {
    return this.pokemonpruebaService.create(createPokemonpruebaDto);
  }

  @Get()
  findAll() {
    return this.pokemonpruebaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonpruebaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonpruebaDto: UpdatePokemonpruebaDto) {
    return this.pokemonpruebaService.update(+id, updatePokemonpruebaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonpruebaService.remove(+id);
  }
}
