import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShapeComponent } from './shape/shape.component';
import { SelectionComponent } from './selection/selection.component';
import { BoardComponent } from './board/board.component';
import { ControlComponent } from './control/control.component';
import { ManipulateComponent } from './manipulate/manipulate.component';

@NgModule({
  declarations: [
    AppComponent,
    ShapeComponent,
    SelectionComponent,
    BoardComponent,
    ControlComponent,
    ManipulateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }