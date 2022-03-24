import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/lib/services/characters/characters.service';

@Component({
  selector: 'app-character-summary',
  templateUrl: './character-summary.component.html',
  styleUrls: ['./character-summary.component.scss'],
})
export class CharacterSummaryComponent implements OnInit {
  characterId: any;
  character: any;
  constructor(
    private characterService: CharactersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRole();
  }

  private getRole() {
    return this.route.paramMap.subscribe((map) => {
      this.characterId = map.get('characterId');
      this.characterService.getById(this.characterId).subscribe((character) => {
        this.character = character;
      });
    });
  }
}
