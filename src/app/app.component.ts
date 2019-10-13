import { Component } from '@angular/core';
import { LayoutComponent} from './layout.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
    simpleItems: string[] = [
    'Pepper',
    'Salt',
    'Paprika'
  ];

}
