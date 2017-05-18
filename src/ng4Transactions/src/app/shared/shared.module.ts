import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { TextFilterPipe } from "./text-filter.pipe";
import { HeaderComponent } from './header.component';
import { FileUploadComponent } from './file-upload.component';

const declarables = [ HeaderComponent, FileUploadComponent, TextFilterPipe ];

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [declarables],
    declarations: [declarables]
})
export class SharedModule { }
