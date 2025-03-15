import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router'; // Ezt a sort kommentezd ki, VAGY töröld.

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],  // Ezt a sort is kommentezd ki, VAGY töröld.
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
