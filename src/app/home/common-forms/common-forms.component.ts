import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-forms',
  templateUrl: './common-forms.component.html',
  styleUrls: ['./common-forms.component.scss'],
})
export class CommonFormsComponent  implements OnInit {
  fields: any[] = [];

  constructor() { }

  ngOnInit() {
    this.fields = [
      {
        questionId:"qc1001",
        answer:null,
        questionText:"Customer name",
        questionType: "text",
        optionalAnswer :null
      },{
        questionId:"qc1002",
        answer:null,
        questionText:"Email",
        questionType: "email",
        optionalAnswer :null
      },{
        questionId:"qc1003",
        answer:null,
        questionText:"Phone number",
        questionType: "phone",
        optionalAnswer :null
      },{
        questionId:"qc1004",
        answer:null,
        questionText:"Address",
        questionType: "description",
        optionalAnswer :null
      },{
        questionId:"qc1005",
        answer:null,
        questionText:"Balance",
        questionType: "number",
        optionalAnswer :null
      },{
        questionId:"qc1006",
        answer:"yes",
        questionText:"Is Customer active",
        questionType: "radio",
        optionalAnswer :["Yes","No"]
      },
    ]
  }

}
