import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(@InjectRepository(Transaction) private repo: Repository<Transaction>) {}

  async create(args: CreateTransactionDto): Promise<Transaction> {
    const transaction = this.repo.create(args);
    return await this.repo.save(transaction);
  }

  async findAll(): Promise<Transaction[]> {
    return await this.repo.find();
  }
}
