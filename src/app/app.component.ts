import {Component} from '@angular/core';
import {HeaderComponent} from './header';
import {SidebarComponent} from './sidebar';
import {ContentComponent} from './content';
import {FooterComponent} from './footer';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, SidebarComponent, ContentComponent, FooterComponent]
})
export class AppComponent {
  title = 'app works!';
}
