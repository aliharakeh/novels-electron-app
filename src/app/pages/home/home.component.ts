import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public filteredCategories: any = [1, 2, 3, 1];

  constructor() { }

  ngOnInit(): void {
  }

}
