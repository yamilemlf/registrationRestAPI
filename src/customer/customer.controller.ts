import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) {}

    @Post()
    create(@Body() customer:any){
        return this.customerService.createNewCustomer(customer)
    }
    
    @Get()
    getCustomers(){
        return this.customerService.getAllCustomers()
    }

    @Get(':id')
    getCustomer(@Param('id') id:number){
        return this.customerService.getCustomerById(Number(id))
    }

}
