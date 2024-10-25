import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { PaymentsComponent } from './payments/payments.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadetudiantsComponent } from './loadetudiants/loadetudiants.component';
import { LoadpaymentsComponent } from './loadpayments/loadpayments.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { AuthGuard } from "./guards/auth.guard";
import { AuthorizationGuard } from "./guards/authorization.guard";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import { DetailpaymentComponent } from './detailpayment/detailpayment.component';
import { FairepaymentComponent } from './fairepayment/fairepayment.component';
import {MatDatepicker, MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {MatFileUploadModule} from "mat-file-upload";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {MatProgressSpinner, MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { VoirlepaymentComponent } from './voirlepayment/voirlepayment.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EtudiantsComponent,
    PaymentsComponent,
    HomeComponent,
    ProfileComponent,
    LoadetudiantsComponent,
    LoadpaymentsComponent,
    LoginComponent,
    DetailpaymentComponent,
    FairepaymentComponent,
    VoirlepaymentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFileUploadModule,
    MatSnackBarModule,
    PdfViewerModule,
    MatProgressSpinnerModule
  ],
  providers: [
    provideAnimationsAsync(),
    AuthGuard,
    AuthorizationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
