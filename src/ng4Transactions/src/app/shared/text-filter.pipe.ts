import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {
    transform(items: any[], args: Object): any {

        if (!items || !args)
            return items;

        const key = Object.keys(args)[0];
        
        return items.filter(item => item[key].indexOf(args[key]) !== -1);
    }
}