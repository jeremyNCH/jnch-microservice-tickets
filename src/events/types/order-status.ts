/**
 * Created: when the order has been created, but the ticket it is trying to order has not been reserved
 * Cancelled: the ticket the order is trying to reserve has already been reserved,
 *            or when he user has cancelled the order,
 *            or the order expires before the payment
 * AwaitingPayment: the order has successfully reserved the ticket
 * Complete: the order has reserved the ticket and the user has provided the payment successfully
 */
export enum OrderStatus {
  Created = 'created',
  Cancelled = 'cancelled',
  AwaitingPayment = 'awaiting:payment',
  Complete = 'complete'
}
