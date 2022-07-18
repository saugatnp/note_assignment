import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotePageComponent } from './content/note-page/note-page.component';
import { TagsComponent } from './content/tags/tags.component';

const routes: Routes = [
  { path: '', component: NotePageComponent},
 { path: 'Home', component: NotePageComponent},
 { path: 'Tags', component: TagsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
