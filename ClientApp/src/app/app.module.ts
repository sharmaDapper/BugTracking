import { ApiService } from './services/api.services';
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
import { EditBugComponent } from './components/edit-bug/edit-bug.component';
import { QuillModule } from 'ngx-quill'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ContentHeaderComponent,
    ContentListComponent,
    LoginComponent,
    EditBugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuillModule
  ],
  providers: [AuthGuard,
    AuthenticationService,ApiService],
  bootstrap: [AppComponent]
})
export class BugTrackerModule { }
