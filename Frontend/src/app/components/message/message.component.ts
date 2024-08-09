import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() message: string = '';
  @Input() show: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  closeModal() {
    this.show = false;
    this.onClose.emit();
  }
}
