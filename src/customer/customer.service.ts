import { Injectable, NotFoundException } from '@nestjs/common';

const customers = [{
    id: 1,
    name: 'Téo',
    email: 'teo@email.com',
    cellNumber: '(11)12312-1212'
},{
    id: 2,
    name: 'Lyon',
    email: 'lyon@email.com',
    cellNumber: '(21)23423-2323'
},{
    id: 3,
    name: 'Luna',
    email: 'luna@email.com',
    cellNumber: '(31)34534-3434'
},{
    id: 4,
    name: 'Lelo',
    email: 'lelo@email.com',
    cellNumber: '(41)45645-4545'
}]

@Injectable()
export class CustomerService {
    
    getAllCustomers(){
        return customers
    }
    
    getCustomerById(id:number){
        const ourCustomer = customers.find(customer => customer.id === id)
        if(!ourCustomer){
            throw new NotFoundException('customer does not exist')
        }
        return ourCustomer 
    }

    createNewCustomer(customer:any){
        customers.push(customer)
        return customers
    }

}
