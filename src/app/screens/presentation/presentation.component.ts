import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PresentationItem } from '../../models/module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  title: string = ""
  elements: PresentationItem[] = [];

  constructor(private dataService: DataService, private route: Router) { }

  ngOnInit(): void {
    this.dataService.loadPresentation().subscribe((result: PresentationItem[]) => {
      if (result) {
        for (let i of result) {
          this.elements.push(i);
        }
        this.title = this.dataService.presentationTitle;
      }
    });
  }

  mission() {
    this.route.navigate(['directions']);
  }

}
