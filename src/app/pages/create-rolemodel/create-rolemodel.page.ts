import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'create-rolemodel',
  templateUrl: './create-rolemodel.page.html',
  styleUrls: ['./create-rolemodel.page.scss'],
})
export class CreateRolemodelPage implements OnInit {

  characters=[
    {
      name: "Physically fit",
      description: "A man who often visit gym or do regular exercises",
      imageUrl: "../../assets/img/characters/fitness_3.svg",
      isSelected: false
    },
    {
      name: "A sportsman",
      description: "Person who plays any kind of out-door games like cricket,football etc.",
      imageUrl: "../../assets/img/characters/basketball.svg",
      isSelected: false
    },
    {
      name: "Dancer",
      description: "Any type of dancing is a good medicine for our body",
      imageUrl: "../../assets/img/characters/dance_the_music.svg",
      isSelected: false
    },
    {
      name: "A good learner",
      description: "A good enthusiastic will be up to date in his domain",
      imageUrl: "../../assets/img/characters/take_a_note_2.svg",
      isSelected: false
    },
    {
      name: "A good listener",
      description: "A good listener has the skill to build and maintain relationships for so long",
      imageUrl: "../../assets/img/characters/undraw_male_avatar_323b.svg",
      isSelected: false
    },
    {
      name: "Soft person",
      description: "Person who keeps characters like lovingness, politeness, kindness, royalty and humility with him",
      imageUrl: "../../assets/img/characters/undraw_super_thank_you_obwk.svg",
      isSelected: false
    },
    {
      name: "A good leader",
      description: "A good leader needs a bunch of qualities like responsibility, honesty and reliability in him to lead a team",
      imageUrl: "../../assets/img/characters/undraw_site_stats_l57q.svg",
      isSelected: false
    },
    {
      name: "mentally strong",
      description: "Mental health is equally important as you physical health",
      imageUrl: "../../assets/img/characters/undraw_powerful_26ry.svg",
      isSelected: false
    }
  ];

  charactersArray=[];

  constructor(public router: Router, public alertController: AlertController) { }

  ngOnInit() {
    
    let rowNum=2;
    this.charactersArray=Array(Math.ceil(this.characters.length/rowNum));
    for(let i=0; i<this.charactersArray.length; i++)  {
      this.charactersArray[i]=Array(rowNum);
      for(let j=0;j<rowNum; j++) {
        if(this.characters[(2*i)+j])
        this.charactersArray[i][j]= this.characters[(2*i)+j];
      }
    }
    console.log(this.charactersArray);
  }
  createRolemodel() {
    let count=0;
    this.charactersArray.forEach(element => {
      element.forEach(data=>{
        if (data.isSelected==true) {
          count++;
        }
      });
    });
    if(count>5) {
      this.presentAlertConfirm();
    }
    else {
      this.cancelSubmit();
    }
    
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Rolemodel created',
      message: 'Your rolemodel is successfully created',
      buttons: [ {
          text: 'Okay',
          handler: () => {
            this.router.navigateByUrl('app');
          }
        }
      ]
    });

    await alert.present();
  }

  async cancelSubmit() {
    const alert = await this.alertController.create({
      header: 'Select atleast 5',
      message: 'Select atleast 5 characters',
      buttons: [ 
        {
          text: 'Okay',
          handler: () => {
            
          }
        }
      ]
    });

    await alert.present();
  }

}