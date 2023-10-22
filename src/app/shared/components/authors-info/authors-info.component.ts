import { Component, OnInit } from '@angular/core';
import { Authors } from 'src/app/core/interface/authors';

@Component({
  selector: 'app-authors-info',
  templateUrl: './authors-info.component.html',
  styleUrls: ['./authors-info.component.scss'],
})
export class AuthorsInfoComponent  implements OnInit {

  constructor(
    public authors:Authors[]
    ) {}

  ngOnInit():void {
    this.authors = [
      {name:"Jesús", surname:"Herrera Sánchez", github:new URL("https://github.com/Jesushs4")},
      {name:"Denisa Ramona", surname:"Belean", github:new URL("https://github.com/denibel04")}
    ]
  }

}
