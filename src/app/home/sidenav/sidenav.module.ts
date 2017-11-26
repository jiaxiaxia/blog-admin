import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from '../../customMaterial/customMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import {SidenavService} from './sidenav.service'
import { SidenavComponent } from './sidenav.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [
    SidenavComponent,
    ItemComponent
  ],
  exports:[
    SidenavComponent
  ],
  providers:[
    {provide: 'sidenavService', useClass: SidenavService}
  ]
})
export class SidenavModule { }
