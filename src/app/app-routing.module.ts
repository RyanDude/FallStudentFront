import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { MentorComponent } from './mentor/mentor.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mentor_profile', component: MentorProfileComponent },
  { path: 'mentor', component: MentorComponent },
  { path: 'student', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

