import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(public domSanitizer: DomSanitizer) { }

  public getSanitazedUrl(part1: string, part2: string) {

    console.log("&&&&&&&&&&&&&&&&&&&&&&&&& I am in");
    let url = "data:" + part1 + ";base64," + part2;
    console.log("++++++" + url);
    console.log("sanitized url", this.domSanitizer.bypassSecurityTrustResourceUrl(url));

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  //The following method converts a base64 encoded string to blob and returns a blob url
  getBlobUrl(base64String: String, contentType: String) {
    const sliceSize = 512;
    const byteCharacters = atob(base64String + '');
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType + '' });
    console.log("blob url", URL.createObjectURL(blob));
    return URL.createObjectURL(blob);

  }

}
