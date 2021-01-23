import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'name-alphabetical',
  template: `<table mat-table [dataSource]="sortedList">
               <ng-container matColumnDef="name">
                 <th mat-header-cell *matHeaderCellDef> Name </th>
                 <td mat-cell *matCellDef="let object"> {{object.name}} </td>
               </ng-container>
               <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
               <tr mat-row *matRowDef="let row; columns: columnsToDisplay;"></tr>
             </table>`,
  styles:   [`table{border: 1px solid black; width: 100%;}
              td{text-align: center;}
              th.mat-header-cell{text-align: center;}`]
})
export class NameAlphabeticalComponent implements OnInit {

    names = [];
    sortedList = [];

    columnsToDisplay = ['name'];

    constructor(private httpClient: HttpClient) {}

    // On initialization the component fetches the data from json file and then orders the names alphabetically
    ngOnInit() {
        this.httpClient.get('assets/names.json').subscribe(data => {
            this.names = data.names;
            this.sortedList = this.names.sort((a, b) => (a.name < b.name ? -1 : 1));
        });
    }
}
