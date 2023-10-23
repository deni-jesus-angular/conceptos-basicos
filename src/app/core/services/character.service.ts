import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, findIndex } from 'rxjs';
import { Characters } from '../interface/characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  _characters:BehaviorSubject<Characters[]> = new BehaviorSubject<Characters[]>([]);
  characters$:Observable<Characters[]> = this._characters.asObservable();

  constructor() { }

  public getAll():Observable<Characters[]> {
    return new Observable(observer => {
      var _characters = [
        {id: 1, name:"Naruto", surname:"Uzumaki", source:"Naruto Shippuden", sourceType: "Anime", sourceChapters:582},
        {id: 2, name:"Geralt", surname:"De Rivia", source:"The Witcher", sourceType: "TV Series", sourceChapters:31},
        {id: 3, name:"Coco", surname:"", source:"Witch Hat Atelier", sourceType: "Manga", sourceChapters:81},
      ]
      observer.next(_characters);
      this._characters.next(_characters);
      observer.complete();
    })
  }

  public updateCharacter(character:Characters):Observable<Characters[]> {
    return new Observable(observer => {
      var _characters = [...this._characters.value];
      var index = _characters.findIndex( chara => chara.id==character.id);
      if (index!=-1) {
        _characters[index] = character;
        this._characters.next(_characters);
        observer.next(_characters);
      } else {
        console.log("Character not found");
      }
      observer.complete();
    })
  }
}
