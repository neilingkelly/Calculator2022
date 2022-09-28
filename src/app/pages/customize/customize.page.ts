import { Component, OnInit, Renderer2 } from '@angular/core';
import { App } from '@capacitor/app';
import {homedir} from 'os';
import { HomePage } from 'src/app/home/home.page';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.page.html',
  styleUrls: ['./customize.page.scss'],
})
export class CustomizePage implements OnInit {

  selectedValue;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {}
    

  PurpleTheme() {
    this.renderer.setAttribute(document.body, 'color-theme', 'purple')
    //this.renderer.setAttribute(HomePage, 'color-theme', 'purple')
  }

  TealTheme() {
    this.renderer.setAttribute(document.body, 'color-theme', 'teal')
    //this.renderer.setAttribute(HomePage, 'color-theme', 'teal')
  }

  FuschiaTheme() {
    this.renderer.setAttribute(document.body, 'color-theme', 'fuschia')
    //this.renderer.setAttribute(HomePage, 'color-theme', 'fuschia')
  }
}
