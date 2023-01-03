import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `"\assets\images\0.png"`);

  constructor() { }

  ngOnInit(): void {
  }

}
