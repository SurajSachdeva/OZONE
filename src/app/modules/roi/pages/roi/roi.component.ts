import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-roi',
  templateUrl: './roi.component.html',
  styleUrls: ['./roi.component.css']
})
export class RoiComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle(' Ozone - ROI Data')
   }

  ngOnInit(): void {
  }

}
