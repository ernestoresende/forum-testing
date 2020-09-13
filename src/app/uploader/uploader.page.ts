import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  fileChanged(event) {
    const files = event.target.files
    console.log(files)

    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'create_new_preset')

    this.http.post('https://res.cloudinary.com/ernestoresende/image/upload', data)
    .subscribe(event => {
      console.log(event)
    })
    // This still doesn't work, but I won't try to make it work as long as I don't need it 


  }

}
