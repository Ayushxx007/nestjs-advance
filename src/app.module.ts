import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { ControllerService } from './controller/controller.service';
import { MynameController } from './myname/myname.controller';
import { MynameService } from './myname/myname.service';

@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule, CustomerModule],
  controllers: [AppController, ProductsController, MynameController],
  providers: [AppService, ProductsService, ControllerService, MynameService],
})
export class AppModule {}
