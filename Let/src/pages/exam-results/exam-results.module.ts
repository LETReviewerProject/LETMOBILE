import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamResultsPage } from './exam-results';
import { RoundPipe } from '../../helpers/roundPipe';

@NgModule({
  declarations: [
    ExamResultsPage,
    RoundPipe
  ],
  imports: [
    IonicPageModule.forChild(ExamResultsPage),
  ],
})
export class ExamResultsPageModule {}
