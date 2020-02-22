import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatTabsModule,
        MatExpansionModule
    ]
})
export class MaterialModule { }

/* Angular material modules exported using a separate module,
enabling single import in app.module */
