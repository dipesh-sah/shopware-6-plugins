<?php

declare(strict_types=1);

namespace ListeningToEvents\Listener;

use Psr\Log\LoggerInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Event\EntityLoadedEvent;

class ProductLoadedListener
{
    /**
     * @var LoggerInterface
     */
    private $logger;
    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }
    public function onProductLoaded(EntityLoadedEvent $entityLoadedEvent)
    {
        foreach($entityLoadedEvent->getEntities() as $product){
            $this->logger->notice("Product Loaded event listener ".print_r($product->getVars()['translated']['name']));
        }
    }
}
