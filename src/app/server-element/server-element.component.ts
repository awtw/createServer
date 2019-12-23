import { Component, OnInit, Input, SimpleChange, OnChanges, SimpleChanges, ElementRef, ContentChild } from '@angular/core';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: [ './server-element.component.css' ]
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: { type: string; name: string; content: string };
  @ContentChild('contentParagraph', { static: true}) paragraph: ElementRef;
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }

	ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit(){
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
}
