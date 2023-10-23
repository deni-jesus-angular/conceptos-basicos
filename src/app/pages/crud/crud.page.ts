import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Characters } from 'src/app/core/interface/characters';
import { CharacterService } from 'src/app/core/services/character.service';
import { CharacterFormComponent } from 'src/app/shared/components/character-form/character-form.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

  constructor(
    public characterService:CharacterService,
    public modal:ModalController,
  ) { }

  ngOnInit(): void{
    this.characterService.getAll().subscribe();
  }

  async presentForm(data: Characters|null, onDismiss:(result:any) => void) {
    const modal = await this.modal.create ({
      component: CharacterFormComponent,
      componentProps: {
        character:data
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=> {
      if (result && result.data) {
        onDismiss(result);
      }
    })
  }

  onCharClicked(character:Characters) {
    var onDismiss = (info:any) => {
      switch(info.role) {
        case 'submit' : {
          this.characterService.updateCharacter(info.data).subscribe();
        }
        break;
        case 'delete' : {
          this.characterService.deleteCharacter(info.data).subscribe();
        }
        break;
      }
    }
    this.presentForm(character,onDismiss);
  }

  onNewCharacter() {
    var onDismiss = (info:any) => {

    }
    this.presentForm(null,onDismiss);
  }

  
  }

