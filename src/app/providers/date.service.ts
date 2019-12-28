import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  temp:any;
  timeDifference:number;

  constructor() { }
  getCurrentTime(): string {
    let currentTime = new Date();
    console.log("&&Current time***",currentTime);
    console.log("&&Current time in string***",currentTime.toISOString());
    return currentTime.toISOString();
    /* let offset = currentTime.getTimezoneOffset();
    console.log("---------------",offset);
    this.temp=offset.toString().replace("-","").valueOf();
    console.log("(((((((((((",this.temp);
    var hours = Math.floor(this.temp / 60);
    var minutes = (offset % 60).toString().replace("-", "");
    console.log("+++++++  " + (currentTime.toISOString()).split("Z")[0] + "+0" + hours + ":" + minutes);

    if (offset < 0) {
      return (currentTime.toISOString()).split("Z")[0] + "+0" + hours + ":" + minutes;
    }
    else {
      return (currentTime.toISOString()).split("Z")[0] + "-0" + hours + ":" + minutes;
    } */
  }


  getElapsedTime(createdDate:string):string{
    console.log("**Created date in elapsed time method**",createdDate);
    let timeDifference=(new Date().valueOf() - new Date(createdDate).valueOf())/60000;
    console.log("&&time difference ***",timeDifference);
    //nested conditional operator 
    return (timeDifference<1)?"just now":(timeDifference<60)?(Math.floor(timeDifference))+" minutes ago"
    :(timeDifference<1420)?(Math.floor(timeDifference/60))+" hours ago":(timeDifference<43800)?
    (Math.floor(timeDifference/1420))+" days ago":(timeDifference<525600)?(Math.floor(timeDifference/43800))+" months ago"
    :(Math.floor(timeDifference/525600))+" Years ago";
  }
}
