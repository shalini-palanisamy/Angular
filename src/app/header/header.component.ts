import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private datastorage: DataStorageService) {}
  OnSaveData() {
    this.datastorage.storeRecipe();
  }
  OnFetchData(){
    this.datastorage.fetchRecipe();
  }
}
