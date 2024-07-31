<?php declare(strict_types=1);

namespace DependencyInjection\Controller;

use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use DependencyInjection\Service\ExampleService;
use Shopware\Core\System\SalesChannel\SalesChannelContext;

#[Route(defaults: ['_routeScope' => ['storefront']])]
class ExampleController extends AbstractController
{
    private ExampleService $exampleService;

    public function __construct(ExampleService $exampleService)
    {
        $this->exampleService = $exampleService;
    }
    #[Route(path: '/example/shopname', name: 'frontend.example.example', methods: ['GET'])]
    public function showShopname(SalesChannelContext $context): Response
    {
        $shopName = $this->exampleService->getShopname($context);

        return $this->render('@DependencyInjection/storefront/page/example/index.html.twig', [
            'shopName' => $shopName,
        ]);
    }
}
