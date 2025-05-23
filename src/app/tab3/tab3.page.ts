import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  onClickButton() {
    console.log('clicked the button');
  }
  onTextClick() {
    console.log('clicked the p tag');
  }
  constructor() {}
}
