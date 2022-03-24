import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/lib/services/characters/characters.service';
import { EpisodesService } from 'src/lib/services/episodes/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  public pagesEpisodes!: number;
  private pagesCharactes: number = 43;
  public episodes: any = [];
  public characters: any = [];

  constructor(
    private episodesService: EpisodesService,
    private characterService: CharactersService
  ) {}

  ngOnInit(): void {
    this.getEpisodes();
    this.getCharactersPages();
  }

  getEpisodes(page?: number) {
    this.episodesService.get(page).subscribe((res: any) => {
      this.episodes = res.results;
      this.pagesEpisodes = res.info.pages;
    });
  }

  getCharactersPages() {
    for (let page = 1; page < this.pagesCharactes; page++) {
      this.getCharacters(page);
    }
  }

  getCharacters(page?: number) {
    this.characterService.get(page).subscribe((res: any) => {
      this.characters = this.characters.concat(res.results);
    });
  }

  getCharactersName(characters: String[]) {
    let results: any = [];
    characters.forEach((c) => {
      let found = this.characters.find((episode: any) => episode.url == c);
      if (found) results.push(found.name);
    });
    return results;
  }
}
