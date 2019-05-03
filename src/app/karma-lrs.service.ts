import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': "Basic " + btoa("0676a4d2-2cd1-468e-a0d1-ed36d307001f:5bc9adc6-61ed-4d63-8fcd-00a502ad78aa"),
    'X-Experience-API-Version': "1.0.1",
    'Access-Control-Allow-Origin': '*'
  })};

  
@Injectable({
  providedIn: 'root'
})
export class KarmaLrsService {

  statement={
    "actor": {
        "mbox": "mailto:sanilkumarp001@gmail.com",
        "name": "Sanil kumar",
        "objectType": "Agent"
    },
    "verb": {
        "id": "http://example.com/xapi/completed",
        "display": {
            "en-US": "completed"
        }
    },
    "object": {
        "id": "http://example.com/button_example",
        "definition": {
            "name": {
                "en-US": "Button example"
            },
            "description": {
                "en-US": "Example xAPI Button"
            }
        },
        "objectType": "Activity"
    }
}
  constructor(private http:HttpClient) { }

  postStatement(currentUser:User,currentActivity) {
    this.statement.actor.mbox="mailto:"+currentUser.email;
    this.statement.verb.id="http://example.com/xapi/completed";
/*     this.statement.object.id="http://example.com/"+currentActivity.title;
    this.statement.object.definition.description["en-US"]=currentActivity.title;
    this.statement.object.definition.name["en-US"]=currentActivity.title; */
    this.statement.object.id="http://example.com/"+"sdsa";
    this.statement.object.definition.description["en-US"]="sdgashj";
    this.statement.object.definition.name["en-US"]="kdskjdk";
    console.log(this.statement);
    console.log(httpOptions);
    //console.log(this.http.post('http://192.168.43.69:9966/xAPI/statements',this.statement,httpOptions));
    //this.http.post('http://192.168.43.69:9966/xAPI/statements',this.statement,httpOptions);
    this.addStatement().subscribe(data=>{console.log(data);});
  }
  addStatement(): Observable<any> {
    return this.http.post<any>('http://192.168.43.69:9966/xAPI/statements', this.statement, httpOptions);
  }
}
