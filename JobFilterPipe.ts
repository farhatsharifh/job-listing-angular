import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'jobfilter',
    pure: false
})
export class JobFilterPipe implements PipeTransform {
    transform(jobs: any[], jobFilters: any[]): any {
        if (!jobs || !jobFilters) {
            return jobs;
        }
        // filter items array, 
        // items which match and return true will be kept,
        // false will be filtered out
        return jobs.filter(job => {
            let jobStr = JSON.stringify(job).toLowerCase();
            return jobFilters.every (filter => jobStr.includes(filter.toLowerCase()));
        });
    }
}