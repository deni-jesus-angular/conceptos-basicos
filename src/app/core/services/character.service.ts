import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, findIndex, lastValueFrom, tap } from 'rxjs';
import { Characters } from '../interface/characters';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})



export class CharacterService {

  private _characters:BehaviorSubject<Characters[]> = new BehaviorSubject<Characters[]>([]);
  public characters$:Observable<Characters[]> = this._characters.asObservable();

  constructor(
    private http:HttpClient,
  ) { }

  public getAll():Observable<Characters[]> {
    return this.http.get<Characters[]>(environment.apiUrl+'/characters').pipe(tap(characters=>{
      this._characters.next(characters);
    }));
  }

  public updateCharacter(character:Characters):Observable<Characters> {
    return this.http.patch<Characters>(environment.apiUrl+`/characters/${character.id}`, character).pipe(tap(async _=>{
      await lastValueFrom(this.getAll());
    }))
  }

  public deleteCharacter(character:Characters):Observable<Characters> {
    return this.http.delete<any>(environment.apiUrl+`/characters/${character.id}`).pipe(tap(async _=>{
      await lastValueFrom(this.getAll());
    }))
  }

  public addCharacter(character:Characters):Observable<Characters> {
    var _character:any = {
      name: character.name,
      surname: character.surname,
      picture: character.picture,
      description: character.description,
      source: character.source,
      sourceType: character.sourceType,
      sourceChapters: character.source,
    }

    return this.http.post<Characters>(environment.apiUrl+"/characters",_character).pipe(tap(_=>{ 
      this.getAll().subscribe();
    }))
  }
}
