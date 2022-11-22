import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { FirestoreDatabase } from '../database/firestore-database';


@Module({
  controllers: [CustomerController],
  providers: [CustomerService,FirestoreDatabase]
})
export class CustomerModule {}
