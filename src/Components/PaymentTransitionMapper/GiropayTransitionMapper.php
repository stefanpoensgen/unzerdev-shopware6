<?php

declare(strict_types=1);

namespace UnzerPayment6\Components\PaymentTransitionMapper;

use heidelpayPHP\Resources\PaymentTypes\BasePaymentType;
use heidelpayPHP\Resources\PaymentTypes\Giropay;

class GiropayTransitionMapper extends AbstractTransitionMapper
{
    public function supports(BasePaymentType $paymentType): bool
    {
        return $paymentType instanceof Giropay;
    }

    protected function getResourceName(): string
    {
        return Giropay::getResourceName();
    }

    protected function isPendingAllowed(): bool
    {
        return true;
    }
}
