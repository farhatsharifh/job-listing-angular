import { Input } from '@angular/core';
import { Component } from '@angular/core';

import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jobsData: any = (data as any).default;
  // @Input() jobRole: any;
  isActive: boolean = true;

  constructor(){}

  ngOnInit(){
    console.log(this.jobsData);
  }

  filterJobs(filterCondition: string) {
    console.log("filtered ", filterCondition);

  }

}
