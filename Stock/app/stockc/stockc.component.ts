import { Component, OnInit } from '@angular/core';
import { Stock1 } from '../stock1';
import { STOCK1 } from '../stockr';

@Component({
  selector: 'app-stockc',
  templateUrl: './stockc.component.html',
  styleUrls: ['./stockc.component.css']
})
export class StockcComponent implements OnInit {
private stock1 : Stock1[] = STOCK1;
  constrsuctor() {}


  ngOnInit() {
  }
  
}
