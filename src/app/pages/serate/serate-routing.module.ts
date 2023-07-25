import { RouterModule, Routes } from "@angular/router";
import { SerateComponent } from "./serate.component";
import { AddSerateComponent } from "./add-serate/add-serate.component";
import { EditSerateComponent } from "./edit-serate/edit-serate.component";
import { NgModule } from "@angular/core";
// import { UpdateTipologiaComponent } from "./update-tipologia/update-tipologia.component";
// import { TipologiaComponent } from "./tipologia.component";

// import { NgModule } from "@angular/core";
// import { AddTipologiaComponent } from "./add-tipologia/add-tipologia.component";
// import { EditTipologiaComponent } from "./edit-tipologia/edit-tipologia.component";
// import { AuthGuard } from "src/app/helpers/auth.guard";

const routes : Routes = [


    {
        path:'',
        data: {
          title: 'tipologiaa',
        },
        children: [
            {
                path:'',
                component: SerateComponent,
                // canActivate:[AuthGuard],
                data: {
                  title: 'Serate',
                //   role:['USER_ADMIN', 'superuser'],
                }
              },
        
          {
            path:'add-serate',
            component: AddSerateComponent,
            // canActivate:[AuthGuard],
            data: {
              title: 'Aggiungi Serata',
            //   role:['USER_ADMIN', 'superuser'],
            }
          },

          {
            path:'edit-serate/:id',
            component: EditSerateComponent,
            // canActivate:[AuthGuard],
            data: {
              title: 'Modifica Serata',
            //   role:['USER_ADMIN', 'superuser'],
            }
          },


]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class SerateRoutingModule{ }
