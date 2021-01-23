import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'name-popularity',
  template: `<table mat-table [dataSource]="sortedList">
               <ng-container matColumnDef="name">
                 <th mat-header-cell *matHeaderCellDef> Name </th>
                 <td mat-cell *matCellDef="let object"> {{object.name}} </td>
               </ng-container>
               <ng-container matColumnDef="amount">
                 <th mat-header-cell *matHeaderCellDef> Amount </th>
                 <td mat-cell *matCellDef="let object"> {{object.amount}} </td>
               </ng-container>
               <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
               <tr mat-row *matRowDef="let row; columns: columnsToDisplay;"></tr>
             </table>`,
  styles:   [`table{border: 1px solid black; width: 100%;}
              td{text-align: center;}
              th.mat-header-cell{text-align: center;}`]
})
export class NamePopularityComponent implements OnInit {

    names = [];
    sortedList = [];

    columnsToDisplay = ['name', 'amount'];

    constructor(private httpClient: HttpClient) {}

    // On initialization the component fetches the data from json file and then orders the names according to popularity of the name
    ngOnInit() {
        this.httpClient.get('assets/names.json').subscribe(data => {
          this.names = data.names;
          this.sortedList = this.names.sort((a, b) => (a.amount > b.amount ? -1 : 1));
        });
    }
}
