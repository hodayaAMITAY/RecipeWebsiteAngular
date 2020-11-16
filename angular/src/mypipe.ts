import{Pipe,PipeTransform}
from '@angular/core';

@Pipe({name:'filesize'})
export class mypipe implements PipeTransform{
    transform(time1:number):string
    {
        if(time1!=null)
        {if(time1==60)return'שעה';
        if(time1<60)return time1.toString()+" "+'דקות';
        const str=(Math.round (time1/60).toString()+'שעות'+(time1%60).toString()+" "+'דקות');
        return str;}
    }
} 