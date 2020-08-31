import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fileChanged(event) {
    const files = event.target.files
    console.log(files)
  }

}
