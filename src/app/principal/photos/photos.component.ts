import { Component } from '@angular/core';
import { BobService } from '../../services/bobservice.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent {
  constructor(private bobService: BobService) {}
  data = new Array();
  ngOnInit() {
    this.bobService.getBobsAllInterceptor().subscribe({
      next: (response: any) => {
        this.data = response.body;
        console.log(this.data);
      },
      error: (error) => console.error(error),
      complete: () => console.info('completed!'),
    });
  }
}
