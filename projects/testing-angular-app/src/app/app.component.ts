import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <h1>Welcome to {{title}}!</h1>
    <lib-oldmartijntjes-angular-test-lib></lib-oldmartijntjes-angular-test-lib>
    <router-outlet />
  `,
    styles: []
})
export class AppComponent {
    title = 'testing-angular-app';
}
