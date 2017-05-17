import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {
    transform(items: any[], args: any): any {

        if (!items || !args || items.length < 0)
            return items;
        
        return items.filter(item => item.category.indexOf(args) !== -1);
    }
}