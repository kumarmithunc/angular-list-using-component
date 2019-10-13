import { Component, Input } from '@angular/core';


@Component({
  selector : 'layout',
  templateUrl : './layout.component.html'
})
export class LayoutComponent{
    @Input() item : string;
}