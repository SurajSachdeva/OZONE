import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mis-form',
  templateUrl: './mis-form.component.html',
  styleUrls: ['./mis-form.component.css']
})
export class MisFormComponent implements OnInit {

  constructor(
    private title: Title
  ) { 
    this.title.setTitle('Ozone - MIS')
  }

  ngOnInit(): void {
  }

}
