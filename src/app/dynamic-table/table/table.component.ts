import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() tableData: any;

  @Output() nestedArray: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // console.log("tableData1", this.tableData);
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

    let dynamicKey = Object.keys(data.nestedArray)[0];
    data.nestedArray = data.nestedArray[dynamicKey];
    data.title = dynamicKey;
    data.activeIndex = data.index + "" + data.activeIndex;

    this.nestedArray.emit(data);

  }


}
