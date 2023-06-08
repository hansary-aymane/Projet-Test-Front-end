import { Component } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  constructor(public uploadService: UploadService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.uploadService.uploadFile(file);
  }
}