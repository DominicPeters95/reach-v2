import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  option: any;
  isLoaded = false;
  title = "";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.isLoaded.subscribe((result) => {
      if (result) this.isLoaded = result;
    })
    this.dataService.loadDirections().subscribe((result) => {
      if (result) {
        this.title = result[0].content;
      }
    })
  }

  addOptions(option: any) {
    this.option = option;
  }
}
