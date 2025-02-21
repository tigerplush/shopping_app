import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Item } from '../../interfaces/item';
import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-item-list',
  imports: [ MatButtonModule, MatIconModule, MatCheckboxModule, MatListModule, MatFormFieldModule, MatInputModule ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  items: Item[] = [];

  constructor(private itemService: ItemService) {
  }

  async ngOnInit() {
    this.items = await this.itemService.getItems();
  }

  async addTodo(titleInput: HTMLInputElement) {
    if (titleInput.value.trim()) {
      await this.itemService.addItem(titleInput.value);
      this.items = await this.itemService.getItems();
      titleInput.value = ''; 
    }
  }

  async deleteItem(id: number | undefined) {
    if(id === undefined) {
      return;
    }
    await this.itemService.deleteItem(id);
    this.items = await this.itemService.getItems();
  }
  
  async deleteAll() {
    await this.itemService.deleteAll();
    this.items = await this.itemService.getItems();
  }
}
