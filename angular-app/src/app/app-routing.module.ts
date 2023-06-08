import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DataTableComponent } from './datatable/datatable.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
    { path: '', component: UserloginComponent },
    { path: 'dash-board', component: DashBoardComponent },
    { path: 'datatable', component: DataTableComponent },
    { path: 'upload-file', component: UploadFileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
