import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  template: `
    <button (click)="clicked()">Click me!</button>
    <span>{{message}}</span>`,
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  isOn = false;

  constructor() { }

  ngOnInit() {
  }

  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }

}
