import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service.service';
// import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor(private service: UserServiceService) { }
  newsPaper = new Observable((sub) => {
    // console.log("emitting value...");
    let count = 0;
    // setInterval(() => {
    //   sub.next(`value emitting...${count++}`)
    // }, 2000)
    
  })
  ngOnInit(): void {
    // let obj = new ParentComponent();
    // obj.
    // obj.
    this.newsPaper.subscribe((data)=>{
      console.log(data, "subsriber 1");
      
    },
    (err)=> {

    },() => {
      
    })
    let secSubscriber = this.newsPaper.subscribe((result) => {
      console.log(result, "subsriber 2");
      
    })

    setTimeout(() => {
      secSubscriber.unsubscribe()
    }, 5000);
  }

  emit(){
    this.service.getUsers().subscribe((data)=>{
      console.log(data, "Success...");
      
    }, (err) => {
      console.log(err, "Failure...");
      
    })
  }

}
