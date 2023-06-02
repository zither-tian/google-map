import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapPageComponent } from './pages';

const routes: Routes = [
    {
        path: 'map',
        component: MapPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
