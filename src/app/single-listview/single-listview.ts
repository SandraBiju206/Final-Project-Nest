import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-single-listview',
  imports: [],
  templateUrl: './single-listview.html',
  styleUrl: './single-listview.css',
})
export class SingleListview {
  singleproduct:any;
  constructor(private route:ActivatedRoute,private apiservice:Apiservice,private cdr:ChangeDetectorRef){}
  ngOnInit()
  {
    //parameter mapping
    const
    productid=this.route.snapshot.paramMap.get('titleid');
    if(productid)
    {
      this.apiservice.getsingleProducts(productid).subscribe((data)=>{
        this.singleproduct=data;
        console.log(data);
        this.cdr.detectChanges()

      });
    }
  }

}
