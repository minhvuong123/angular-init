import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'filter',
//   pure: false // force pipe update when the data is changed
})
export class FilterPipe implements PipeTransform {
    transform(value: any, filterString: string, propName: string): any {
        if (value.length === 0 || filterString == '') {
            return value;
        }
        
        const resultArray = [];
        for (const item of value) {
            if (item[propName] === filterString) {
                resultArray.push(item);
            }
        }

        return resultArray;
    }
}