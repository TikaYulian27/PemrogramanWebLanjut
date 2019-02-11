import { TableService } from './table.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'Tika Yulianti';
  alamat = 'Jalan Kesumba Dalam No.2 Malang';
  tanggal = Date.now();
  hby: any[];
  constructor(private tableServ:TableService){}

  ngOnInit(){
    this.hby = this.tableServ.getTika();
  }
}
