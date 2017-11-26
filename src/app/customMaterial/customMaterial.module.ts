import {NgModule} from '@angular/core'

import {
    MdToolbarModule,
    MdButtonModule,
    MdSidenavModule,
    MdInputModule,
    MdIconModule,
    MdListModule,
    MdTooltipModule,
    MdChipsModule

} from '@angular/material'
import {MdCardModule} from '@angular/material';
@NgModule({
    imports: [
        MdToolbarModule,
        MdButtonModule,
        MdSidenavModule,
        MdInputModule,
        MdIconModule,
        MdListModule,
        MdCardModule,
        MdTooltipModule,
        MdChipsModule
    ],
    exports: [
        MdToolbarModule,
        MdButtonModule,
        MdSidenavModule,
        MdInputModule,
        MdIconModule,
        MdListModule,
        MdCardModule,
        MdTooltipModule,
        MdChipsModule
    ],
    declarations: []
})

export class CustomMaterialModule {
}
