import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'name-number',
  template: '<p>Total amount of all the names is {{number}}.</p>',
  styles:   ['p{margin-left: auto; margin-right: auto; display: inline-block;}']
})
export class NameNumberComponent implements OnInit {

  names: any = [];
  number = 0;

  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient.get('assets/names.json').subscribe(data => {
      this.names = data.names;
      this.names.forEach(element => {
        this.number += element.amount;
      });
    });
  }
}
