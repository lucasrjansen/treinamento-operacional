import { Component } from '@angular/core';
import { dxDataGridRowObject, Column } from 'devextreme/ui/data_grid';

export interface EventDataGrid{

    event: Event;
    component: Component;
    element: Element;
    row: dxDataGridRowObject;
    column: Column
}