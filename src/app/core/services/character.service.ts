import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
        {id: 1, name:"a", surname:"b", source:"c", sourceType: "d", sourceChapters:1},
        {id: 2, name:"aa", surname:"bb", source:"cc", sourceType: "dd", sourceChapters:1},
        {id: 3, name:"aaa", surname:"bbb", source:"ccc", sourceType: "ddd", sourceChapters:1},
      ]
    })
  }
}
