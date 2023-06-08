import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule } from '@angular/forms';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { ToastrModule } from 'ngx-toastr';
import { DataTableComponent } from './datatable/datatable.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    DashBoardComponent,
    DataTableComponent,
    UploadFileComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ToastrModule.forRoot(),
    DataTablesModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatBadgeModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
