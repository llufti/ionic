import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reoder',
  templateUrl: './reoder.page.html',
  styleUrls: ['./reoder.page.scss'],
})
export class ReoderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doReorder(ev:any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

}
