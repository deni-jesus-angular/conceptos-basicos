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
      this.form.controls['surname'].setValue(_character.surname);
      this.form.controls['source'].setValue(_character.source);
      this.form.controls['sourceType'].setValue(_character.sourceType);
      this.form.controls['sourceChapters'].setValue(_character.sourceChapters);
    }
  }
  constructor(
    private modal: ModalController,
    private formBuilder: FormBuilder,
  ) { 
    this.form = this.formBuilder.group({
      id:[null],
      name:['', [Validators.required]],
      surname:['', [Validators.required]],
      source:['', [Validators.required]],
      sourceType:['', [Validators.required]],
      sourceChapters:[0, [Validators.required]],
    })
  }

  ngOnInit() {}

  onCancel() {
    this.modal.dismiss(null, 'cancel')
  }

  onSubmit() {
    this.modal.dismiss(this.form.value, 'submit')
  }

}
