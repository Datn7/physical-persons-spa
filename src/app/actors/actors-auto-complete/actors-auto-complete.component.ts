import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-actors-auto-complete',
  templateUrl: './actors-auto-complete.component.html',
  styleUrls: ['./actors-auto-complete.component.scss'],
})
export class ActorsAutoCompleteComponent implements OnInit {
  control: FormControl = new FormControl();

  actors = [
    {
      name: 'Tom Holland',
      picture:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elm030119cetomhollandnature-001-1561051667.jpg',
    },
    {
      name: 'Tom Hanks',
      picture:
        'https://c4.wallpaperflare.com/wallpaper/475/731/694/actor-male-tom-hanks-wallpaper-preview.jpg',
    },
    {
      name: 'Tom Hardy',
      picture:
        'https://imgs.sector.sk/files/novinky/0/2020/9-29-21-13-24//bude-tom-hardy-novym-jamesom-b-247905-5993005-660.jpg',
    },
  ];

  selectedActors: any = [];

  originalActors = this.actors;

  columnsToDisplay = ['picture', 'name', 'character', 'actions'];

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor() {}

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(
        (actor) => actor.name.indexOf(value) !== -1
      );
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');

    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

  remove(actor: any) {
    console.log(actor);

    const index = this.selectedActors.findIndex(
      (a: any) => a.name === actor.name
    );
    this.selectedActors.splice(index, 1);

    this.table.renderRows();
  }

  dropped(event: CdkDragDrop<any[]>) {
    const previousIndex = this.selectedActors.findIndex(
      (actor: any) => actor === event.item.data
    );
    moveItemInArray(this.selectedActors, previousIndex, event.currentIndex);

    this.table.renderRows();
  }
}
