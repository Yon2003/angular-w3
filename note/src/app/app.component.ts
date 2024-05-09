import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public index = 0;

  public tempTitle = '';
  public tempDescription = '';

  public modelTitle = '';
  public modelDescription = '';


  public NotCollection: { title: string, description: string }[] = [];



  public InputTitle(input) {
    this.tempTitle = input.target.value;
  }
  public InputDescription(input) {
    this.tempDescription = input.target.value;
  }



  public SaveNote() {

    if (this.NotCollection.length > this.index) {
      this.NotCollection[this.index].title = this.tempTitle;
      this.NotCollection[this.index].description = this.tempDescription;
    } else {
      this.NotCollection.push({ title: this.tempTitle, description: this.tempDescription });
    }
    this.resetTempData();
    console.log("NotCollection:", this.NotCollection);
  }

  public EditBut(videoElement, index) {
    this.index = index;
  }



  private resetTempData() {
    this.index++;
    this.tempTitle = '';
    this.tempDescription = '';
  }
}
