import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppShellComponent} from '../example/appshell/app.shell.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo : 'home'},
  {path: 'home', component : AppShellComponent, children : [
      {path: '', pathMatch: 'full', redirectTo : 'dashboard'}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
