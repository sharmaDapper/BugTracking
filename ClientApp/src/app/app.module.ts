import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './modules/routing.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentHeaderComponent } from './components/content/content-header/content-header.component';
import { ContentListComponent } from './components/content/content-list/content-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ContentHeaderComponent,
    ContentListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthGuard,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class BugTrackerModule { }
