import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from "@angular/http";
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";
import {CustomMaterialModule} from '../customMaterial/customMaterial.module';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        FlexLayoutModule,
        CustomMaterialModule
    ],
    exports:[
        CommonModule,
        HttpModule,
        FormsModule,
        FlexLayoutModule,
        CustomMaterialModule
    ],
    declarations: []
})
export class CoreModule {
}
