import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic-modal',
  template: '<div [innerHTML]="content"></div>',
  styleUrls: ['./dynamic-modal.component.scss']
})

export class DynamicModalComponent {
  @Input() content: SafeHtml | undefined;

  constructor(private sanitizer: DomSanitizer) {}
}
