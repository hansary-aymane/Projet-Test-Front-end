import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-data-table',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DataTableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  data = [
    { id: 1, nom: 'Ligne 1' },
    { id: 2, nom: 'Ligne 2' },
    { id: 3, nom: 'Ligne 3' }
  ];

  constructor() { }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }

  editItem(item: any) {
    // Logique de modification de l'élément
  }

  deleteItem(item: any) {
    // Logique de suppression de l'élément
  }
}