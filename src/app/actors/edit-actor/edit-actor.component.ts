import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.scss'],
})
export class EditActorComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private _actorsService: ActorsService,
    private _router: Router
  ) {}

  model!: actorDTO;

  // model: actorDTO = {
  //   id: 1,
  //   name: 'Gio',
  //   dateOfBirth: new Date(),
  //   picture: 'assets/images/Screenshot_2020-09-16-13-18-16.png',
  // };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      //alert(params.id);
      this._actorsService
        .getById(params.id)
        .subscribe((actor) => (this.model = actor));
    });
  }

  saveChanges(actorCreationDTO: actorCreationDTO) {
    console.log(actorCreationDTO);
    this._actorsService.edit(this.model.id, actorCreationDTO).subscribe(() => {
      this._router.navigate(['/actors']);
    });
  }
}
