import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { EnvironmentAutomationServiceComponent } from './components/services/environment-automation-service/environment-automation-service.component';
import { InfocusnewsProductComponent } from './components/Projects/infocusnews-product/infocusnews-product.component';
import { BusinessIntelligenceProductComponent } from './components/Projects/business-intelligence-product/business-intelligence-product.component';
import { InnovationProductComponent } from './components/Projects/innovation-product/innovation-product.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DataManagementServiceComponent } from './components/services/data-management-service/data-management-service.component';
import { ItOperationsManagementServiceComponent } from './components/services/it-operations-management-service/it-operations-management-service.component';
import { ProcessAutomationServiceComponent } from './components/services/process-automation-service/process-automation-service.component';
import { SoftwareFactoryServiceComponent } from './components/services/software-factory-service/software-factory-service.component';
import { SoftwareQualityServiceComponent } from './components/services/software-quality-service/software-quality-service.component';


export const routes: Routes = [
    {path: '', redirectTo: 'principal', pathMatch: 'full'},
    {path: 'principal', component: PrincipalComponent},
    {path: 'services/itOperationsManagementService', component: ItOperationsManagementServiceComponent},
    {path: 'services/dataManagementService', component: DataManagementServiceComponent},
    {path: 'services/processAutomationService', component: ProcessAutomationServiceComponent},
    {path: 'services/softwareFactoryService', component: SoftwareFactoryServiceComponent},
    {path: 'services/softwareQualityService', component: SoftwareQualityServiceComponent},
    {path: 'products/infocusnwesProduct', component: InfocusnewsProductComponent},
    {path: 'products/businessIntelligenceProduct', component: BusinessIntelligenceProductComponent},
    {path: 'products/innovationProduct', component: InnovationProductComponent},
    {path: 'aboutUs', component: AboutUsComponent},

    //{path: 'services/environmentAutomation', component: EnvironmentAutomationServiceComponent},//Esta ruta se debe validar con el cliente
];
