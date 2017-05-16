import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HeaderComponent } from './header.component';
import { FileUploadComponent } from './file-upload.component';

const declarables = [HeaderComponent, FileUploadComponent];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
    providers: [
        { provide: "createXHR", useValue: () => new XMLHttpRequest() }
    ]
})
export class SharedModule { }
