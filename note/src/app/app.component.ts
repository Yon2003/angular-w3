import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'note';

  public index = 0;

  public tempTitle = '';
  public tempDescription = '';


  public NotCollection: { title: string, description: string }[] = [];



  public InputTitle(input) {
    this.tempTitle = input.target;
  }
  public InputDescription(input) {
    this.tempDescription = input.target;
  }

  public SaveNote() {

    this.NotCollection[this.index].title = this.tempTitle;
    this.NotCollection[this.index].description = this.tempDescription;
    this.resetTempData();
  }

  public processVideoRecord(videoElement, index) {
    this.index = index;
  }

  private resetTempData() {
    this.tempTitle = '';
    this.tempDescription = '';
  }
}
