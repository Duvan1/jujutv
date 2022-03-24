import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from 'src/lib/services/characters/characters.service';
import { EpisodesService } from 'src/lib/services/episodes/episodes.service';
import { LocationsService } from 'src/lib/services/locations/locations.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public characters: any = [];
  public pagesCharacter!: number;
  public pagesLocation: number = 8;
  public locations: any = [];

  constructor(
    private characterServices: CharactersService,
    private locationService: LocationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCharacters();
    this.getLocationPages();
  }

  getLocationPages() {
    for (let page = 1; page < this.pagesLocation; page++) {
      this.getLocation(page);
    }
  }

  getCharacters(page?: number) {
    this.characterServices.get(page).subscribe((res: any) => {
      this.characters = res.results;
      this.pagesCharacter = res.info.pages;
    });
  }

  getLocation(page?: number) {
    this.locationService.get(page).subscribe((locations: any) => {
      this.locations = this.locations.concat(locations.results);
    });
  }

  getLocationName(url: String) {
    let id = url.split('/').pop();
    return this.locations.find((episode: any) => episode.id == id);
  }

  goToDetails(id: string) {
    console.log(id);

    this.router.navigate(['locations/', id]);
  }
}
