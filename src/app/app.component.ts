import { Component } from '@angular/core';

import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jobsData: any = (data as any).default;
  jobFilters = []; 
  isFilterOn: boolean = false;

  constructor(){}

  ngOnInit(){
    this.isFilterOn = false;
  }

  filterJobs(filterTag: string) {  
    this.isFilterOn = true;
    if(!this.jobFilters.includes(filterTag)) {
      this.jobFilters.push(filterTag);
    }
  }

  removeFilter(index: number) {
    if (index !== -1) {
      this.jobFilters.splice(index, 1);
    }
    if (this.jobFilters.length <= 0) {
      this.isFilterOn = false;
    }  
  }

  clearAllFilters() {
    this.jobFilters = [];
    this.isFilterOn = false;
  }

}
