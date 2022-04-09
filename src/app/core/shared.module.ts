import { NgModule } from '@angular/core';
import { ApiRestService } from './services/rest/api-rest.service';

@NgModule({
  providers: [ApiRestService],
})
export class SharedModule {}
