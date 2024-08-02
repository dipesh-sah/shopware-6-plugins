<?php declare(strict_types=1);

namespace AddCartCollector\Cart;

use Shopware\Core\Checkout\Cart\Cart;
use Shopware\Core\Checkout\Cart\CartBehavior;
use Shopware\Core\Checkout\Cart\CartProcessorInterface;
use Shopware\Core\Checkout\Cart\LineItem\CartDataCollection;
use Shopware\Core\System\SalesChannel\SalesChannelContext;

class CustomCartProcessor implements CartProcessorInterface{
    public function process(CartDataCollection $data, Cart $original, Cart $toCalculate, SalesChannelContext $context, CartBehavior $behavior): void
    {
        foreach($original->getLineItems() as $lineitems){
            $lineitems->setPayloadValue('customPayLoadValue', 'customValue');
        }
    }
}