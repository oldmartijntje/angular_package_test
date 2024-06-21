import { Component } from '@angular/core';

@Component({
    selector: 'lib-oldmartijntjes-angular-test-lib',
    standalone: true,
    imports: [],
    template: `
    <style>
        .coolMario {
            width: 100px;
            height: 100px;
        }

        .coolMario:hover {
            width: 200px;
            height: 200px;
        }
    </style>
    <p>
      oldmartijntjes-angular-test-lib works!
    </p>
    <img class="coolMario" src="https://i.imgur.com/rfsYUKo.jpeg" alt="mario">
  `,
    styles: ``
})
export class OldmartijntjesAngularTestLibComponent {

}
