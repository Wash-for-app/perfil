import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SessaoFotosPage} from './sessao-fotos.page';
import { from } from 'rxjs';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SessaoFotosPage }])
  ],
  declarations: [SessaoFotosPage]
})
export class SessaoFotosPageModule {}
