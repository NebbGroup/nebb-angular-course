import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'nebb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements AfterViewInit {

  @ViewChild(FooterComponent) footerComponent: FooterComponent;
  title = 'nebb-angular-course';

  ngAfterViewInit(): void {
    console.log(this.footerComponent);
  }
}
