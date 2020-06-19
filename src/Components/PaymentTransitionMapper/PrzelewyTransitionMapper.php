<?php

declare(strict_types=1);

namespace HeidelPayment6\Components\PaymentTransitionMapper;

use heidelpayPHP\Resources\PaymentTypes\BasePaymentType;
use heidelpayPHP\Resources\PaymentTypes\Przelewy24;

class PrzelewyTransitionMapper extends AbstractTransitionMapper
{
    public function supports(BasePaymentType $paymentType): bool
    {
        return $paymentType instanceof Przelewy24;
    }

    protected function getResourceName(): string
    {
        return Przelewy24::getResourceName();
    }
}
