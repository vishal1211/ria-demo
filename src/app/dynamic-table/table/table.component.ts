import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() tableData: any;
  childArray = [];

  constructor() { }

  ngOnInit(): void {

// console.log(typeof "vishal@nikita.com")
  }


  checkInputType(inputValue) {

    // To find date format we will considering two parameters 
    // 1. we get date in string format so here we check given input should not be number.
    // 2. second we will converting given input into milliseconds if it is > 0 then it is date 


    if (typeof inputValue != 'number' && Date.parse(inputValue) > 0) {
      return 'date';
    } else {
      return typeof inputValue
    }


  }
  getDateFormat(inputDate) {

    let date = new Date(inputDate);
    // our json format  mm/dd/yyyy
    //date picker need format in   yyyy/mm/dd

    return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, "0") +
      '-' + date.getDate().toString().padStart(2, "0");
  }

  checkDataType(list) {
    return typeof list;
  }

  getLabel(label) {
    // console.log(label)
    if (typeof label !== 'string') {
      label = "" + label + "";
    }
    return label.replace(/([a-z])([A-Z])/g, '$1 $2');
  }

  nestedData(index, data) {

    this.hasChildExist({ activeIndex: index, title: Object.keys(data)[0], dataList: data[Object.keys(data)[0]] });

  }


  hasChildExist(list) {

    let hasActiveIndex = false;

    this.childArray.map((element) => {
      if (list.activeIndex == element.activeIndex) {
        hasActiveIndex = true;
        return;
      }
    });

    if (!hasActiveIndex) {
      this.childArray.push(list);
    }

  }

}
