import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private progressSubject = new BehaviorSubject<number>(0);
  public progress$ = this.progressSubject.asObservable();

  uploadFile(file: File) {
    const totalSize = file.size;
    let uploadedSize = 0;

    const intervalId = setInterval(() => {
      uploadedSize += Math.random() * 500; // Simulate progress with random increments
      const progress = Math.min((uploadedSize / totalSize) * 100, 100);
      this.progressSubject.next(progress);

      if (progress === 100) {
        clearInterval(intervalId);
      }
    }, 500);
  }
}