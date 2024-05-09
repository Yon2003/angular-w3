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

  public

  public WillEdit=false;


  public NotCollection: { title: string, description: string }[] = [];



  public InputTitle(input) {
    this.tempTitle = input.target.value;
  }
  public InputDescription(input) {
    this.tempDescription = input.target.value;
  }



  public SaveNote() {

      this.NotCollection[this.index].title = this.modelTitle;
      this.NotCollection[this.index].description = this.modelDescription;
    this.resetTempData();
    console.log("NotCollection:", this.NotCollection);
  }

  public EditBut(videoElement, index) {
    this.WillEdit=true;
    this.index = index;
    this.modelTitle=this.NotCollection[this.index].title;
    this.modelDescription=this.NotCollection[this.index].description;
    console.log("NotCollection:", this.NotCollection);
  }



  private resetTempData() {
    this.modelTitle='';
    this.modelDescription='';
  }

  public AddNote(){
    this.NotCollection.push({ title: this.modelTitle, description: this.modelDescription });
    this.resetTempData();
  }

  public DeleteNote(Element){
    let counter=this.NotCollection.indexOf(Element);
    this.NotCollection.splice(counter,1);
    console.log("NotCollection:", this.NotCollection);
    this.resetTempData();

  }
}
