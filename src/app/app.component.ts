import { Component, OnInit } from '@angular/core';
import { Tutorial } from './models/tutorial.model';
import { TutorialService } from './services/tutorial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rakamin';
  tutorials: Tutorial[] = [];

  constructor(
    private tutorialService: TutorialService
  ) {

  }

  ngOnInit(): void {
    this.getDataTutorial()
  }

  getDataTutorial() {
    this.tutorialService.getAll().subscribe((res) => {
      console.log('success get data',res);
      this.tutorials = res;
    })
  }

  getDataTutorialId(id: any) {
    this.tutorialService.get(id).subscribe((res) => {
      console.log('success get data',res);
    })
  }
}
