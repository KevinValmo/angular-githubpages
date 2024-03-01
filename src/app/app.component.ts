import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <div class="join">
      <input type="radio" name="theme-buttons"
             class="btn theme-controller join-item" aria-label="Default"
             checked
             value="default"
      />
      <input type="radio" name="theme-buttons"
             class="btn theme-controller join-item" aria-label="Retro"
             value="light"
      />
      <input type="radio" name="theme-buttons"
             class="btn theme-controller join-item" aria-label="Cyberpunk"
             value="cupcake"/>
    </div>
  `, styles: [],
})
export class AppComponent {
  title = 'angular-githubpages';
}
