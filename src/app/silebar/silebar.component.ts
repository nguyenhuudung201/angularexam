import { Component } from '@angular/core';

@Component({
  selector: 'app-silebar',
  templateUrl: './silebar.component.html',
  styleUrls: ['./silebar.component.css']
})
export class SilebarComponent {
  info:any=[{
    name: "Gemma Roberson",
    matter:"Apology for late response email ",
    hello:" Hello Colette Wooten "
  },
    {
      name: " Ann Garza",
      matter:"Application for Job Title ",
      hello:" Hello Kerry Best "
    },
    {
      name: "Alfonso Burnett",
      matter:"Anything I can help him ",
      hello:" Hello Otto Ashley"
    },
    {
      name: "Rogan Espinoza",
      matter:"Assistant Marketing Department ",
      hello:" Hello Kerry Best "
    },
    {
      name: "Sierra Kerr ",
      matter:"Application for Transfer ",
      hello:" Hi Halle Lindsey "
    },

  ];

}
