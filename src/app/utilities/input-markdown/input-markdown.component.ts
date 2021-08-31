import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.scss'],
})
export class InputMarkdownComponent implements OnInit {
  @Input() markdownContent: any;

  constructor() {}

  @Output() changeMarkdown = new EventEmitter<string>();

  ngOnInit(): void {}
}
