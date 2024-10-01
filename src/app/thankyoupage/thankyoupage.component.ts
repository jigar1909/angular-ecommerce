import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-thankyoupage',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './thankyoupage.component.html',
  styleUrl: './thankyoupage.component.css'
})
export class ThankyoupageComponent {

}
