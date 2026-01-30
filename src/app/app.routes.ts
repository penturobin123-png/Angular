import { Routes } from '@angular/router';
import { Home } from './UI/home/home';
import { About } from './UI/about/about';
import { Service } from './UI/service/service';
import { Contact } from './UI/contact/contact';
import { CloudService } from './UI/service/cloud-service/cloud-service';
import { CyberSecurity } from './UI/service/cyber-security/cyber-security';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'service',component:Service},
    {path:'service/cloud-service',component:CloudService},
    {path:'service/cyber-security',component:CyberSecurity},
    {path:'contact',component:Contact}
];
