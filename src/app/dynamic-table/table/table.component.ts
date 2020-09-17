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
    console.log("tableData1", this.tableData);
  }
  checkDataType(list) {
    return typeof list;
  }
  getLabel(label) {
    console.log(label)
    if (typeof label !== 'string') {
      label = "" + label + "";
    }
    return label.replace(/([a-z])([A-Z])/g, '$1 $2');
  }

  nestedData(data) {

    let dynamicKey = Object.keys(data.childArray)[0];
    data.dataList = data.childArray[dynamicKey];
    data.title = dynamicKey;
    data.activeIndex =data.activeIndex;

    this.hasChildExist(data);

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
