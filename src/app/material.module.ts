
import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatFormField,
    MatPaginatorModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatDividerModule,
        MatPaginatorModule,
        MatDividerModule,
        MatListModule,
        MatChipsModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatFormField,
        MatPaginatorModule,
        MatDividerModule,
        MatListModule,
        MatChipsModule,
        MatTableModule
    ]
})
export class MaterialModule {

}
