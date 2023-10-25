import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Characters } from '../core/interface/characters';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent  implements OnInit {

  @Input() character:Characters | null=null;

  @Output() onEditClicked:EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private characterModal: ModalController,
  ) { }
  ngOnInit() {}

  onCancel() {
    this.characterModal.dismiss(null, 'cancel')
  }
  
}
