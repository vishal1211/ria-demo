import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

 
  jsonData = {
    "nodeOne": "John Doe",
    "nodeTwo": "05/06/2020",
    "nodeThree": 777,
    "nodeFour": [
      { "elementOne": "B Street" },
      { "elementTwo": "City" },
      { "elementThree": "Area - 591323" },
      {
        "elementFour": [
          { "elementFive": "06/07/2020" },
          { "elementSix": 123 }
        
        ]
      }
    ] 
  };

  nestedArray = [];
 
  constructor() {

  }

 
  ngOnInit(): void {
  }



  checkDataType(list) {
    return typeof list;
  }

  nestedTable(list) {

    let hasActiveIndex = false;
 
    this.nestedArray.map((element)=>{
      if (list.activeIndex == element.activeIndex) {
        hasActiveIndex = true;
        return;
      }
    });

    if (!hasActiveIndex) {
      this.nestedArray.push(list);
    }
   
  
  }
 
}
