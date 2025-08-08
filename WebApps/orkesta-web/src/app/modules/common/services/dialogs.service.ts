import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

   constructor(
      private confirmationService: ConfirmationService,
      private messageService: MessageService,
      private translateService: TranslateService) { }

  successMessage(titleKey: string, descriptionKey: string) {
    this.showMessage('success', titleKey, descriptionKey);
  }

  warnMessage(titleKey: string, descriptionKey: string) {
    this.showMessage('warn', titleKey, descriptionKey);
  }

  errorMessage(titleKey: string, descriptionKey: string) {
    this.showMessage('error', titleKey, descriptionKey);
  }

  showConfirmMessage(message) {
    this.messageService.clear();
    this.messageService.add({ sticky: true, severity: 'warn', summary: message, detail: 'confirm'});
}

  confirmDeleteDialog(key, accept, message = '¿Desea eliminar este registro?') {
    this.confirmationService.confirm({
      key: key,
      header: 'Confirmar eliminar',
      message: message,
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        accept();
      }
    });
  }

  confirmDialog(key, message, accept) {
    this.confirmationService.confirm({
      header: 'Confirmar',
      key: key,
      message: message,
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        accept();
      }
    });
  }
  confirmRejectDialog(key, message, accept, reject) {
    this.confirmationService.confirm({
      header: 'Confirmar',
      key: key,
      message: message,
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        accept();
      },
      reject: () => {
        reject();
      }
    });
  }

  private showMessage(severity: string, title: string, description: string) {
    this.messageService.add(
      {
        severity: severity,
        summary: this.getTextByKey(title),
        detail: this.getTextByKey(description)
      }
    );
  }

  private getTextByKey(key: string) {
    return this.translateService.instant(key);
  }

}
