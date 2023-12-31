import { Injectable } from '@angular/core';
import { Authors } from '../interface/authors';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private _authors:BehaviorSubject<Authors[]> = new BehaviorSubject<Authors[]>([]);
  public authors$:Observable<Authors[]> = this._authors.asObservable();

  constructor() { }

  public getAll():Observable<Authors[]> {
    return new Observable(observer => {
      var authors:Authors[] = [
      {name:"Jesús", surname:"Herrera Sánchez", github:"https://github.com/Jesushs4", photo:new URL("https://avatars.githubusercontent.com/u/115071141?v=4")},
      {name:"Denisa Ramona", surname:"Belean", github:"https://github.com/denibel04",photo:new URL("https://avatars.githubusercontent.com/u/115071551?v=4")}
    ];
    this._authors.next(authors)
    observer.complete;
    })
  }
}
