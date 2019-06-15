import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './_components/homepage/homepage.component';
import { AboutComponent } from './_components/about/about.component';
import { BlogPostComponent } from './_components/blog-post/blog-post.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'blog-post',
    component: BlogPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
