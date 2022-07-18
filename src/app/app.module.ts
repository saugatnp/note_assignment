import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotePageComponent } from './content/note-page/note-page.component';
import { NavigationComponent } from './content/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { TagsComponent } from './content/tags/tags.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NotePageComponent,
    NavigationComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
