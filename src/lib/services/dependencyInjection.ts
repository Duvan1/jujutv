import { CharactersService } from './characters/characters.service';
import { EpisodesService } from './episodes/episodes.service';
import { LocationsService } from './locations/locations.service';
import { SettingsService } from './settings/settings.service';

export const ServicesInjection = [
  CharactersService,
  EpisodesService,
  LocationsService,
  SettingsService,
];
