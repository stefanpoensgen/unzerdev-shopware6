<?php

declare(strict_types=1);

namespace HeidelPayment6\Components\PaymentTransitionMapper;

use HeidelPayment6\Components\PaymentTransitionMapper\Exception\TransitionMapperException;
use heidelpayPHP\Resources\Payment;
use heidelpayPHP\Resources\PaymentTypes\BasePaymentType;
use heidelpayPHP\Resources\PaymentTypes\InvoiceFactoring;

class InvoiceFactoringTransitionMapper extends AbstractTransitionMapper
{
    public function supports(BasePaymentType $paymentType): bool
    {
        return $paymentType instanceof InvoiceFactoring;
    }

    public function getTargetPaymentStatus(Payment $paymentObject): string
    {
        if ($paymentObject->isCanceled()) {
            $status = $this->checkForRefund($paymentObject);

            if ($status !== self::INVALID_TRANSITION) {
                return $status;
            }

            throw new TransitionMapperException($this->getResourceName());
        }

        $mappedStatus = $this->mapPaymentStatus($paymentObject);

        if ($paymentObject->isPending()) {
            return $this->checkForShipment($paymentObject, $mappedStatus);
        }

        return $mappedStatus;
    }

    protected function getResourceName(): string
    {
        return InvoiceFactoring::getResourceName();
    }
}
