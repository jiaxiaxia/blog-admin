import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CustomMaterialModule} from '../customMaterial/customMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeRoutingModule } from './home.route.module';
import {SidenavModule} from './sidenav/sidenav.module'
/*导入header，sidebar，footer,content组件 */
import { HomeComponent } from './home.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomMaterialModule,
    FlexLayoutModule,
    SidenavModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,

  ],
  providers: [HomeComponent]
})
export class HomeModule { }
