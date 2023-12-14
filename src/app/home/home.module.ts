import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonInput, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CommonFormsComponent } from './common-forms/common-forms.component';
import { CommonTableComponent } from './common-table/common-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TopMenuBarComponent } from './top-menu-bar/top-menu-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TableModule,
    ButtonModule
  ],
  declarations: [HomePage,
    CommonFormsComponent,
    CommonTableComponent,
    TopMenuBarComponent],
  bootstrap:[IonInput]
})
export class HomePageModule {}
