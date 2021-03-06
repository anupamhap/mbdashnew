import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FusionChartsComponent } from './FusionCharts/fusioncharts.component';
import {GlobalService} from './services/global.service'

//import { AboutComponent } from './about/about.component';
//import { ReportsComponent } from './reports/reports.component';
//import { ContactsComponent } from './contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import * as jspdf from 'jspdf';

import html2canvas from 'html2canvas';

//Fusion Charts Dependencies
import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Pie3d from 'fusioncharts/viz/pie3d';
import Line from 'fusioncharts/viz/line';
import Doughnut2d from 'fusioncharts/viz/doughnut2d';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';
import Column2d from 'fusioncharts/viz/column2d';
FusionChartsModule.fcRoot(FusionCharts, FusionTheme, Pie3d, Line, Doughnut2d, Column2d);

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule


} from '@angular/material';
import { FormComponent } from './dashboard/form/form.component';
import { PreviewComponent } from './dashboard/preview/preview.component';
import { SwitchPreviewService } from './dashboard/switch-preview.service';
import { PACPDialogComponent } from './dashboard/preview/pacpdialog/pacpdialog.component';
import { ReportsComponent } from './reports/reports.component';
import { LineChartComponent } from './reports/linechart/linechart.component';
import { DonutChartComponent } from './reports/donutchart/donutchart.component';
import { BarchartComponent } from './reports/barchart/barchart.component';
import { OpencvResultsComponent } from './opencv-results/opencv-results.component';
import { BlockageComponent } from './opencv-results/blockage/blockage.component';
import { TreeRootIntrusionsComponent } from './opencv-results/tree-root-intrusions/tree-root-intrusions.component';
import { CracksComponent } from './opencv-results/cracks/cracks.component';
import { JointsComponent } from './opencv-results/joints/joints.component';

import { LiveProcessingComponent } from './live-processing/live-processing.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    FormComponent,
    PreviewComponent,
    FusionChartsComponent,
    PACPDialogComponent,
    ReportsComponent,
    LineChartComponent,
    DonutChartComponent,
    BarchartComponent,
    OpencvResultsComponent,
    BlockageComponent,
    TreeRootIntrusionsComponent,
    CracksComponent,
    JointsComponent,
    LiveProcessingComponent
    // AboutComponent,
    // ReportsComponent,
    // ContactsComponent,
  ],
  imports: [
    HttpClientModule,
    MatDatepickerModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FlexLayoutModule,
    FusionChartsModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [SwitchPreviewService,GlobalService],
  entryComponents: [PACPDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
