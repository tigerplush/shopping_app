import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopping-app';
  links = [
    {link: './items', title: 'Items'},
    {link: './week-plan', title: 'Weekly Plan'},
    {link: './recipes', title: 'Recipes'}
  ];
  activeLink = this.links[0];
}
