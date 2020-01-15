import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [CoreComponent, TableComponent],
  imports: [
  ],
  exports: [CoreComponent,TableComponent]
})
export class CoreModule { }
