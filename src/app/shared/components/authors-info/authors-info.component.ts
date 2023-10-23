import { Component, Input, OnInit } from '@angular/core';
import { Authors } from 'src/app/core/interface/authors';

@Component({
  selector: 'app-authors-info',
  templateUrl: './authors-info.component.html',
  styleUrls: ['./authors-info.component.scss'],
})
export class AuthorsInfoComponent  implements OnInit {

  @Input() author:Authors | null=null;


  constructor() {}

  ngOnInit():void {}

}
