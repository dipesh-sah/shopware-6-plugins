<?php declare(strict_types=1);

namespace AddScheduledTask\ScheduledTask;

use Shopware\Core\Framework\MessageQueue\ScheduledTask\ScheduledTask;

class ExampleTask extends ScheduledTask
{
    public static function getTaskName(): string
    {
        return 'swag.example_task';
    }

    public static function getDefaultInterval(): int
    {
        return 10; // 5 minutes
    }
}
