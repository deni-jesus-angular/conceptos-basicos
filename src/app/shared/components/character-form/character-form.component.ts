import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Characters } from 'src/app/core/interface/characters';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss'],
})
export class CharacterFormComponent  implements OnInit {

  form: FormGroup;
  mode: 'New' | 'Edit' = 'New';

  @Input() set character(_character: Characters | null) {
    if (_character) {
      this.mode = 'Edit';
      this.form.controls['id'].setValue(_character.id);
      this.form.controls['name'].setValue(_character.name);
      this.form.controls['picture'].setValue(_character.picture);
      this.form.controls['surname'].setValue(_character.surname);
      this.form.controls['description'].setValue(_character.description);
      this.form.controls['source'].setValue(_character.source);
      this.form.controls['sourceType'].setValue(_character.sourceType);
      this.form.controls['sourceChapters'].setValue(_character.sourceChapters);
    }
  }
  constructor(
    private formModal: ModalController,
    private formBuilder: FormBuilder,
  ) { 
    this.form = this.formBuilder.group({
      id:[null],
      picture:[''],
      name:['', [Validators.required]],
      surname:['', [Validators.required]],
      description:[''],
      source:['', [Validators.required]],
      sourceType:['', [Validators.required]],
      sourceChapters:[0, [Validators.required]],
    })
  }

  ngOnInit() {}

  onCancel() {
    this.formModal.dismiss(null, 'cancel')
  }

  onSubmit() {
    this.formModal.dismiss(this.form.value, 'submit')
  }

  onDelete() {
    this.formModal.dismiss(this.form.value, 'delete')
  }

}
