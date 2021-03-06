import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styleUrls: ["./event-thumbnail.component.scss"]
})
export class EventThumbnailComponent implements OnInit {
  @Input() item: any;
  @Input() pastEvent = false;
  @Output() eventComments = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  convertDate(d) {
    const a = d.slice(5);
    const b = d.slice(0, 4);
    return a + "-" + b;
  }

  convertTime(t) {
    const h = t.slice(0, 2);
    const s = t.slice(3);
    if (h >= 12) {
      return h - 12 + ":" + s + " PM";
    }
  }

  getEventComments() {
    this.eventComments.emit(this.item.id);
  }
}
