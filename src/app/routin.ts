import {RouterModule, Routes} from '@angular/Router';

import {HomeComponent} from './pages/home/home.component';
import {CategoriaComponent} from './pages/categoria/categoria.component';


const condicionales :Routes =[
    
    {path:"home",
    component: HomeComponent,

    },
    {
        path:"categoria",
        component:CategoriaComponent,
    }

]

export const appRoutingModule = RouterModule.forRoot(condicionales);
