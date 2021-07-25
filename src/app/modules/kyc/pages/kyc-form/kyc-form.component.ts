import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kyc-form',
  templateUrl: './kyc-form.component.html',
  styleUrls: ['./kyc-form.component.css']
})
export class KycFormComponent implements OnInit {

  constructor(
    private title : Title
  ) { 
    this.title.setTitle('Ozone - KYC Form');
  }

  ngOnInit(): void {
  }

}
