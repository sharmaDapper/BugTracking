import { EditBugComponent } from './../components/edit-bug/edit-bug.component';
import { RouterModule, Routes }  from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';
import { HeaderComponent } from '../components/header/header.component';
import { ContentComponent } from '../components/content/content.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ContentHeaderComponent } from '../components/content/content-header/content-header.component';
import { ContentListComponent } from '../components/content/content-list/content-list.component';
import { LoginComponent } from '../components/login/login.component';
import {AuthGuard} from '../components/login/login.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'bugs', component: ContentComponent ,canActivate: [AuthGuard]  },
    { path: 'bugs/:id', component: EditBugComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' }
    //{ path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule  { }
