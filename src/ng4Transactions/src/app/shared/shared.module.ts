import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { FileUploadComponent } from './file-upload.component';

const declarables = [HeaderComponent, FileUploadComponent];

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [declarables],
    declarations: [declarables],
    providers: [
        { provide: "createXHR", useValue: () => new XMLHttpRequest() }
    ]
})
export class SharedModule { }
