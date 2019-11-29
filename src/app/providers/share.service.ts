import { Injectable } from '@angular/core';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private socialSharing: SocialSharing) { }

  public share(message:string, imgUrl:string): void {
    console.log('to be shared',message,imgUrl);
    this.socialSharing.share(message,null,imgUrl,'https://felixsoinfotech.com/products/').then(data=>{
      console.log('the post can be shared',data);
    },error=>{
      console.log('something went wrong when sharing',error);
    })
  }
}
