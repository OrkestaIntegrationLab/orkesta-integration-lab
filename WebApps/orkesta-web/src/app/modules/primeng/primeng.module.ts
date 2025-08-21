import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { CheckboxModule } from "primeng/checkbox";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { RippleModule } from "primeng/ripple";
import { ConfirmationService, MessageService, SharedModule} from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from "primeng/password";
import { RadioButtonModule } from "primeng/radiobutton";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { CardModule } from "primeng/card";
import { PanelMenuModule } from "primeng/panelmenu";
import { SidebarModule } from "primeng/sidebar";
import { MenuModule } from "primeng/menu";
import { InputNumberModule } from "primeng/inputnumber";
import { GMapModule } from "primeng/gmap";
import { InputSwitchModule } from "primeng/inputswitch";
import { AccordionModule } from "primeng/accordion";
import { TabViewModule } from "primeng/tabview";
import { PanelModule } from "primeng/panel";
import { KeyFilterModule } from "primeng/keyfilter";
import { SplitButtonModule } from "primeng/splitbutton";
import { TooltipModule } from "primeng/tooltip";
import { ProgressBarModule } from "primeng/progressbar";
import { SliderModule } from "primeng/slider";
import { ContextMenuModule } from "primeng/contextmenu";
import { FieldsetModule } from "primeng/fieldset";
import { InputTextareaModule } from "primeng/inputtextarea";
import { MultiSelectModule } from "primeng/multiselect";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { TreeModule } from "primeng/tree";
import { FileUploadModule } from "primeng/fileupload";
import { TreeTableModule } from "primeng/treetable";
import { ToolbarModule } from "primeng/toolbar";
import { DividerModule } from "primeng/divider";
import { TagModule } from "primeng/tag";
import { TabMenuModule } from "primeng/tabmenu";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { TableModule } from "primeng/table";
import { ToggleButtonModule } from "primeng/togglebutton";
import { EditorModule } from "primeng/editor";
import { PaginatorModule } from "primeng/paginator";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { ListboxModule } from "primeng/listbox";
import { ChipModule } from "primeng/chip";
import { TriStateCheckboxModule } from "primeng/tristatecheckbox";
import { StepsModule } from "primeng/steps";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { DataViewModule } from "primeng/dataview";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ColorPickerModule } from "primeng/colorpicker";
import { TimelineModule } from "primeng/timeline";
import { SkeletonModule } from "primeng/skeleton";
import { KnobModule } from "primeng/knob";

import { GalleriaModule } from "primeng/galleria";
import { TieredMenuModule } from "primeng/tieredmenu";
import { CarouselModule } from "primeng/carousel";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { DialogService } from "../common/services/dialog.service";
import { RatingModule } from "primeng/rating";
import { ChartModule } from "primeng/chart";
import { OrganizationChartModule } from "primeng/organizationchart";
import { AutoCompleteModule } from "primeng/autocomplete";
import { ChipsModule } from "primeng/chips";
import { SpinnerModule } from "primeng/spinner";
import {ScrollTopModule} from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import {SelectButtonModule} from 'primeng/selectbutton';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],exports:[
        InputTextModule,
    ButtonModule,
    SharedModule,
    RippleModule,
    MessageModule,
    MessagesModule,
    DialogModule,
    ToastModule,
    PasswordModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    CardModule,
    PanelMenuModule,
    SidebarModule,
    MenuModule,
    InputNumberModule,
    GMapModule,
    InputSwitchModule,
    AccordionModule,
    TabViewModule,
    PanelModule,
    KeyFilterModule,
    SplitButtonModule,
    TooltipModule,
    ProgressBarModule,
    SliderModule,
    ContextMenuModule,
    FieldsetModule,
    InputTextareaModule,
    MultiSelectModule,
    CascadeSelectModule,
    OverlayPanelModule,
    TreeModule,
    FileUploadModule,
    TreeTableModule,
    ToolbarModule,
    DividerModule,
    TagModule,
    TabMenuModule,
    ConfirmDialogModule,
    TableModule,
    ToggleButtonModule,
    EditorModule,
    PaginatorModule,
    DynamicDialogModule,
    ListboxModule,
    ChipModule,
    ChipsModule,
    TriStateCheckboxModule,
    StepsModule,
    AvatarModule,
    AvatarGroupModule,
    DataViewModule,
    ProgressSpinnerModule,
    ColorPickerModule,
    TimelineModule,
    SkeletonModule,
    KnobModule,
    GalleriaModule,
    TieredMenuModule,
    CarouselModule,
    BreadcrumbModule,
    RatingModule,
    OrganizationChartModule,
    AutoCompleteModule,
    ScrollTopModule,
    ScrollPanelModule,
    SpinnerModule,
    SelectButtonModule
  ],providers: [
    ConfirmationService,
    MessageService,
    DialogService
  ]
})
export class PrimengModule { }
