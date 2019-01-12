import { Component, OnInit } from '@angular/core';
import {Developer} from './developer'
import {DeveloperService} from './developer.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css'],
  providers: [DeveloperService]
})
export class DevelopersComponent implements OnInit {

  developers: Developer[]

  constructor(private developerService: DeveloperService) { }

  ngOnInit() {
    this.developerService
      .getDevelopers()
      .then((developers: Developer[]) => {
        this.developers = developers.map((developer) => {
          return developer;
        });
      });
  }

}
