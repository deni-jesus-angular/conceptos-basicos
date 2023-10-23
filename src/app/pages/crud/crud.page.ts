import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

  constructor(
    public characterService:CharacterService,
  ) { }

  ngOnInit(): void{
    this.characterService.getAll().subscribe();
  }

  
  }

