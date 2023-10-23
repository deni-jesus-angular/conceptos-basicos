import { Component, Input, OnInit } from '@angular/core';
import { Characters } from 'src/app/core/interface/characters';

@Component({
  selector: 'app-crud-info',
  templateUrl: './crud-info.component.html',
  styleUrls: ['./crud-info.component.scss'],
})
export class CrudInfoComponent  implements OnInit {

  @Input() character:Characters | null=null;

  constructor(
    
  ) { }

  ngOnInit() {}

}
