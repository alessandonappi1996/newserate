import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerateComponent } from './pages/serate/serate.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'serate'
  },
  { path: 'serate',
  // canActivate:[AuthGuard],
  component: SerateComponent,
  data: {
    title:'Home',
  }
},
{path: 'serate',
  loadChildren: () =>
    import('./pages/serate/serate.module').then((m) => m.SerateModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




  
 }
