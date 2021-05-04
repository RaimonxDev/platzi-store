import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { CategoriesModule } from './controllers/categories/categories.module';
import { ProductsModule } from './controllers/products/products.module';
import { CustomersModule } from './controllers/customers/customers.module';
import { OrdersModule } from './controllers/orders/orders.module';
import { UsersModule } from './controllers/users/users.module';
import { BrandsModule } from './controllers/brands/brands.module';

@Module({
  imports: [
    CategoriesModule,
    ProductsModule,
    CustomersModule,
    OrdersModule,
    UsersModule,
    BrandsModule,
  ],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService],
})
export class AppModule {}
