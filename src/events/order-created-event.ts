import { Subjects } from './subjects';
import { OrderStatus } from './types/order-status';

/**
 * expiresAt: string instead of Date -> to be able to control the time zone manually
 */
export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
