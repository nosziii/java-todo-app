import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Ezt is javítottam, `styleUrl` helyett `styleUrls`
  standalone: true,
  imports: [RouterModule],
})
export class AppComponent {
  title = 'frontend';
}
