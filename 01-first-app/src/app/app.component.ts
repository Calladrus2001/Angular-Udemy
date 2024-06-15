import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './controllers/header.component';
import { UserComponent } from "./controllers/user.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterOutlet, HeaderComponent, UserComponent]
})
export class AppComponent {
  title = '01-first-app';
}
