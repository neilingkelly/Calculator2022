import { Component } from '@angular/core';
import { IonItem } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { GlobaldataService } from '../globaldata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  router: Router;
  display="";
  addend=0;
  minuend=0;
  multiplicand=0;
  dividend=0;
  operation="";
  secondNumberString=""
  decimalPlaces=0;
  decimalPlaces2=0;
  decimalPlacesResult=0;
  result=0;
  resultString="";
  expression="";
  history="";
  problemComplete=false;

  constructor(){}

  OneButton(display) {
    if (this.problemComplete === true) {
      this.display="";
      this.problemComplete=false;
    }
    this.display += "1";
  }

  TwoButton(display) {
    if (this.problemComplete === true) {
      this.display="";
      this.problemComplete=false;
    }
    this.display += "2";
  }

  ThreeButton(display) {
    if (this.problemComplete === true) {
      this.display="";
      this.problemComplete=false;
    }
    this.display += "3";
  }

  FourButton(display) {
    if (this.problemComplete === true) {
      this.display="";
      this.problemComplete=false;
    }
    this.display += "4";
  }

  FiveButton(display) {
    if (this.problemComplete === true) {
      this.display="";
      this.problemComplete=false;
    }
    this.display += "5";
  }

  SixButton(display) {
    if (this.problemComplete === true) {
      this.display="";
      this.problemComplete=false;
    }
    this.display += "6";
  }

  SevenButton(display) {
    if (this.problemComplete === true) {
      this.display="";
      this.problemComplete=false;
    }
    this.display += "7";
  }

  EightButton(display) {
    if (this.problemComplete === true) {
      this.display="";
      this.problemComplete=false;
    }
    this.display += "8";
  }

  NineButton(display) {
    if (this.problemComplete === true) {
      this.display="";
      this.problemComplete=false;
    }
    this.display += "9";
  }

  ZeroButton(display) {
    if (this.problemComplete === true) {
      this.display="";
      this.problemComplete=false;
    }
    this.display += "0";
  }

  DecimalPoint(display) {
    if (this.problemComplete === true) {
      this.display="";
      this.problemComplete=false;
    }
    this.display += ".";
  }

  ClearButton(display) {
    this.display = "";
    this.problemComplete=false;
  }

  Add(display) {
    this.operation = "+";
    if (display.includes('.')) {
      this.decimalPlaces = display.length - display.indexOf('.') - 1;
    }
    this.addend = parseFloat(display);
    this.display += " + ";
    this.problemComplete=false;
  }

  Subtract(display) {
    this.operation = "-";
    if (display.includes('.')) {
      this.decimalPlaces = display.length - display.indexOf('.') - 1;
    }
    this.minuend = parseFloat(display);
    this.display += " - ";
    this.problemComplete=false;
  }

  Multiply(display) {
    this.operation = "*";
    if (display.includes('.')) {
      this.decimalPlaces = display.length - display.indexOf('.') - 1;
    }
    this.multiplicand = parseFloat(display);
    this.display += " * ";
    this.problemComplete=false;
  }

  Divide(display) {
    this.operation = "/";
    if (display.includes('.')) {
      this.decimalPlaces = display.length - display.indexOf('.') - 1;
    }
    this.dividend = parseFloat(display);
    this.display += " / ";
    this.problemComplete=false;
  }

  Equals(display, operation) {
    this.expression = display;
    let operationIndex = display.indexOf(operation);
    display = display.slice(operationIndex + 2);
    this.secondNumberString = display;
    if (this.secondNumberString.includes('.')) {
      this.decimalPlaces2 = this.secondNumberString.length - this.secondNumberString.indexOf('.') - 1;
      if (this.decimalPlaces2 > this.decimalPlaces) {
        this.decimalPlaces = this.decimalPlaces2;
      }
    }
    switch (operation) {
      case "+": {
        this.result = this.addend + parseFloat(display);
        this.display = this.result.toFixed(this.decimalPlaces).toString();
        this.expression += " = " + this.result;
        this.history += "\n" + this.expression;
        break;
      }
      case "-": {
        this.result = this.minuend - parseFloat(display);
        this.display = this.result.toFixed(this.decimalPlaces).toString();
        this.expression += " = " + this.result;
        this.history += "\n" + this.expression;
        break;
      }
      case "*": {
        this.result = this.multiplicand * parseFloat(display);
        this.display = this.result.toFixed(this.decimalPlaces).toString();
        this.expression += " = " + this.result;
        this.history += "\n" + this.expression;
        break;
      }
      case "/": {
        this.result = this.dividend / parseFloat(display);
        this.resultString = this.result.toString();
        if (this.resultString.includes('.')) {
          this.decimalPlacesResult = this.resultString.length - this.resultString.indexOf('.') - 1;
          if (this.decimalPlacesResult > this.decimalPlaces) {
            this.decimalPlaces = this.decimalPlacesResult;
          }
        }
        this.display = this.result.toFixed(this.decimalPlaces).toString();
        this.expression += " = " + this.result;
        this.history += "\n" + this.expression;
        break;
      }
      default: {
        this.display = "";
        break;
      }
    }
    this.decimalPlaces = 0;
    this.problemComplete = true;
  }
}
