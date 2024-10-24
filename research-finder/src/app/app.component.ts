/*import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'research-finder';
}
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'] // using SASS
})
export class AppComponent {
  // Add the missing methods here
  browseProjects() {
    console.log('Browsing research projects...');
    // Add your logic for browsing projects here
  }

  signUp() {
    console.log('Signing up...');
    // Add your logic for signing up here
  }
}