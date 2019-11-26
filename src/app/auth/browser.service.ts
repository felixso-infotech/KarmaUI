import { Injectable } from '@angular/core';
import { CordovaBrowser, CordovaDocument } from 'ionic-appauth/lib/cordova';
import { SafariViewController } from '@ionic-native/safari-view-controller'
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser'

@Injectable({
  providedIn: 'root'
})
export class BrowserService extends CordovaBrowser {

  private inAppBrowserRefCopy : InAppBrowserObject | undefined;

  public async  closeWindow(): Promise<void> {
    await CordovaDocument.ready();

/*     if(await SafariViewController.isAvailable()){
        SafariViewController.hide(); 
    }else{ */
        if(this.inAppBrowserRefCopy != undefined)
            this.inAppBrowserRefCopy.close(); 
    
}

  public async showWindow(url: string): Promise<string | undefined> {
    await CordovaDocument.ready();

    /*     if(await SafariViewController.isAvailable()){
            let optionSafari: any = {
                url: url,    
                showDefaultShareMenuItem: false,
                toolbarColor: '#ffffff'
            }
            SafariViewController.show(optionSafari).subscribe((result : any) => {
                if (result.event === 'closed') {
                   this.onCloseFunction();
                }
            });
        }else{ */
    let options: any = {
      location: 'no',
      zoom: 'no',
      clearcache: 'yes',
      clearsessioncache: 'yes',
    }

     this.inAppBrowserRefCopy = InAppBrowser.create(url, '_self', options);

    if (this.inAppBrowserRefCopy != undefined)
      this.inAppBrowserRefCopy.on('exit').subscribe((event) => this.onCloseFunction);

    return;
  }
}
