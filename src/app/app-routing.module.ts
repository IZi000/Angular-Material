import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginainicialComponent } from "./paginainicial/paginainicial.component";


const routes:Routes=[
    {path:"",component:PaginainicialComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }