import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <p>Stuff I still haven't done:</p>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Todos';
}
