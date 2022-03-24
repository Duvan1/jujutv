import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/lib/services/characters/characters.service';
import { LocationsService } from 'src/lib/services/locations/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  locationId: any;
  location: any;
  private pagesCharactes: number = 43;
  public characters: any = [];

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationsService,
    private characterService: CharactersService
  ) {}

  ngOnInit(): void {
    this.getLocation();
    this.getCharactersPages();
  }

  private getLocation() {
    return this.route.paramMap.subscribe((map) => {
      this.locationId = map.get('locationId');
      this.locationService.getById(this.locationId).subscribe((location) => {
        this.location = location;
        console.log(location);
      });
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
