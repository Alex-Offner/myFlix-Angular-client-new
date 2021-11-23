
/**
 * The director-card allows users to view information about the director. It is opened upon clicking the director button on the movie-card.
 * @module DirectorCardComponent
 */

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director-card',
  templateUrl: './director-card.component.html',
  styleUrls: ['./director-card.component.scss'],
})
export class DirectorCardComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      bio: string;
    }
  ) { }

  ngOnInit(): void {
  }
}