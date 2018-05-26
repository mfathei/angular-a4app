import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  { path: '', component: UserComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
