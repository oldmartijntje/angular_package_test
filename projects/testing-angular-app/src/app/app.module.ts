import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OldmartijntjesAngularTestLibComponent } from 'oldmartijntjes-angular-test-lib';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OldmartijntjesAngularTestLibComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
