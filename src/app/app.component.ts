import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-githubpages';
}
