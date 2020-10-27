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

  constructor(){}

  ngOnInit(){
    console.log(this.jobsData);
  }

  filterJobs(filterTag: string) {    
    if(!this.jobFilters.includes(filterTag)) {
      this.jobFilters.push(filterTag);
    }
    console.log("*** filterTags array: ", this.jobFilters);
  }

}
