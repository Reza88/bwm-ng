import { UppercasePipe } from './../common/pipes/uppercase.pipe';
import {NgModule} from '@angular/core'; 
import { RentalComponent } from './rental.component';
import { Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'; 

import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component'; 
import { CommonModule } from '../../../node_modules/@angular/common';

import {RentalService} from './shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component'; 

import {NgPipesModule} from 'ngx-pipes'; 

const routes:Routes =[
    {path:'rentals',
    component:RentalComponent,
    children:[
        {path:'',component:RentalListComponent}, 
        {path:':rentalId', component:RentalDetailComponent}
    ]
   }
]

@NgModule({
    declarations:[
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent,
        RentalDetailComponent  
    ], 
    imports:[
        CommonModule, 
        RouterModule.forChild(routes),
        HttpClientModule,
        NgPipesModule
    ],
    providers:[
        RentalService
    ]
})

export class RentalModule{}