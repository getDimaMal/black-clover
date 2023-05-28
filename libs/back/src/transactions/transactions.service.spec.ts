import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Transaction } from './entities/transaction.entity';
import { createTransaction, transaction, transactionsList } from './test-data/transactions.test-data';
import { TransactionsService } from './transactions.service';

describe('TransactionsService', () => {
  let transactionsService: TransactionsService;

  const mockRepository: Partial<Repository<Transaction>> = {
    create: jest.fn().mockReturnValue(transaction),
    save: jest.fn().mockResolvedValue(transaction),
    find: jest.fn().mockResolvedValue(transactionsList),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsService, { provide: getRepositoryToken(Transaction), useValue: mockRepository }],
    }).compile();

    transactionsService = module.get<TransactionsService>(TransactionsService);
  });

  describe('create', () => {
    it('should return a new transaction', async () => {
      const result = await transactionsService.create(createTransaction);

      expect(mockRepository.create).toHaveBeenCalledWith(createTransaction);
      expect(mockRepository.save).toHaveBeenCalledWith(transaction);
      expect(result).toEqual(transaction);
    });
  });

  describe('findAll', () => {
    it('should return a list of transactions', async () => {
      const result = await transactionsService.findAll();

      expect(mockRepository.find).toHaveBeenCalled();
      expect(result).toEqual(transactionsList);
    });

    it('should return an empty list when not found', async () => {
      jest.spyOn(mockRepository, 'find').mockResolvedValue([]);

      const result = await transactionsService.findAll();
      expect(mockRepository.find).toHaveBeenCalled();
      expect(result).toEqual([]);
    });
  });
});
