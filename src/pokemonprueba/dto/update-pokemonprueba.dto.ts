import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonpruebaDto } from './create-pokemonprueba.dto';

export class UpdatePokemonpruebaDto extends PartialType(CreatePokemonpruebaDto) {}
