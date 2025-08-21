import { Directive, ElementRef, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

export class Validations {
  keyPressOnlyLetters(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/^[a-zA-ZäÄëËïÏöÖüÜáéíóúÁÉÍÓÚñÑ\s]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  keyPressOnlyLettersAndNumbers(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (this.LettersNumberandspace.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  
  keyPressOnlyNumbers(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/^[0-9]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressOnlyDecimal(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/^\.[0-9]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressnoneSpecialCharacters(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/^[a-zA-Z0-9äÄëËïÏöÖüÜáéíóúÁÉÍÓÚñÑ\s]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  keyPressForNameCategoryMasters(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/^[a-zA-Z0-9-äÄëËïÏöÖüÜáéíóúÁÉÍÓÚñÑ\s-/+-.]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  keyPressForGtin(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/^[a-zA-Z0-9-äÄëËïÏöÖüÜáéíóúÁÉÍÓÚñÑ\s]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  noPaste(event) {
    event.preventDefault();
    return false;
  }

  keyPressAbbreviation(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/^[a-zA-Z0-9]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  PasteOnlyNumbers(event) {
    if (event.type == "paste") {
      var clipboardData = event.clipboardData;
      var pastedData = clipboardData.getData('Text');
      if (isNaN(pastedData)) {
        event.preventDefault();

      } else {
        return;
      }
    }
    var keyCode = event.keyCode || event.which;
    if (keyCode >= 96 && keyCode <= 105) {
      // Numpad keys
      keyCode -= 48;
    }
    var charValue = String.fromCharCode(keyCode);
    if (isNaN(parseInt(charValue)) && event.keyCode != 8) {
      event.preventDefault();
    }
  }

  keyPressForReferent(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/^[a-zA-Z0-9-]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  toCapitalizeSimbology(event: any) {
    var textBox = event.target;
    var start = textBox.selectionStart;
    var end = textBox.selectionEnd;
    if (textBox.value.length == 1)
      textBox.value = textBox.value.toUpperCase().trim();
    else {
      textBox.value = textBox.value.charAt(0).toUpperCase().trim() + textBox.value.slice(1);
    }
    textBox.setSelectionRange(start, end);
  }
  keyPressFroLettersNumbersPointanddash(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/^[a-zA-Z0-9.-]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressForValor(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/^[a-zA-Z0-9.-_ZäÄëËïÏöÖüÜáéíóúÁÉÍÓÚñÑ\s]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressForDecimal(event) {
    var inp = String.fromCharCode(event.keyCode);
    var value = event.target.value + inp;
    if (/^[0-9]{1,2}(\.([0-9]{1,3})?)?$|^[0-9]{1,3}$/.test(value)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  keyPressForDecimalNegativeandPositive(event) {
    var inp = String.fromCharCode(event.keyCode);
    var value = event.target.value + inp;
    if (/^[-]{0,1}$|^-?[0-9]{1,2}(\.([0-9]{1,3})?)?$|^-?[0-9]{1,3}$/.test(value)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  keyPressForDecimal4NegativeandPositive(event) {
    var inp = String.fromCharCode(event.keyCode);
    var value = event.target.value + inp;
    if (/^[-]{0,1}$|^-?[0-9]{1,3}(\.([0-9]{1,4})?)?$|^-?[0-9]{1,4}$/.test(value)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressOnlyNumbersNegativeandPositive(event) {
    var inp = String.fromCharCode(event.keyCode);
    var value = event.target.value + inp;
    if (/^[-]{0,1}$|^-?[0-9]{1,6}$/.test(value)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  keyPressForNumberLot(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/^[a-zA-Z0-9-\s]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressNotAmpersand(event) {
    debugger;
    var inp = String.fromCharCode(event.keyCode);
    if (/^[^&\v]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  toCapitalizeString(event: any) {
    var textBox = event.target;
    var start = textBox.selectionStart;
    var end = textBox.selectionEnd;
    if (textBox.value.length == 1)
      textBox.value = textBox.value.toUpperCase().trim();
    else {
      textBox.value = textBox.value.charAt(0).toUpperCase().trim() + textBox.value.slice(1).toLowerCase();
    }
    textBox.setSelectionRange(start, end);
  }
  toUppercaseString(event: any) {
    var textBox = event.target;
    var start = textBox.selectionStart;
    var end = textBox.selectionEnd;
    if (textBox.value.length == 1)
      textBox.value = textBox.value.toUpperCase();
    else {
      textBox.value = textBox.value.toUpperCase();
    }
    textBox.setSelectionRange(start, end);
  }
  toTrimAndCapitalizeString(event: any) {
    var textBox = event.target;
    var start = textBox.selectionStart;
    var end = textBox.selectionEnd;
    if (textBox.value.length == 1)
      textBox.value = textBox.value.toUpperCase().trim();
    else {
      //textBox.value = textBox.value.trim();
      textBox.value = textBox.value.charAt(0).trim().toUpperCase() + textBox.value.slice(1).toLowerCase();
    }
    textBox.setSelectionRange(start, end);
  }
  toTrimAndUppercaseString(event: any) {
    var textBox = event.target;
    var start = textBox.selectionStart;
    var end = textBox.selectionEnd;
    textBox.value = textBox.value.trim();
    textBox.value = textBox.value.toUpperCase();
    textBox.setSelectionRange(start, end);
  }
  LettersNumberandDash: RegExp = /^[a-zA-Z0-9-]*$/;
  LettersNumberandspace: RegExp = /^[a-zA-Z0-9-\s]*$/;
  NumberandDash: RegExp = /^[0-9-]*$/;
  Numeric: RegExp = /^[0-9]*$/;
  AlphaNumeric: RegExp = /^[0-9a-zA-Z]*$/;
  DecimalNegativeandPositive: RegExp = /^[-]{0,1}$|^-?[0-9]{1,2}(\.([0-9]{1,3})?)?$|^-?[0-9]{1,3}$/;
  NotSpaces: RegExp = /^\S+$/
  Email: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  toCapitalize(event: any) {
    var textBox = event.target;
    var start = textBox.selectionStart;
    var end = textBox.selectionEnd;
    if (textBox.value.length == 1)
      textBox.value = textBox.value.toUpperCase().trim();
    else {
      textBox.value = textBox.value.charAt(0).toUpperCase().trim() + textBox.value.slice(1);
    }
    textBox.setSelectionRange(start, end);
  }
}


@Directive({
  selector: '[appDecimalAmount]'
})
export class DecimalAmountDirective {

  private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
  constructor(private el: ElementRef) { }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();

    }
  }
}