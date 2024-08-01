<?php declare(strict_types=1);

namespace AddCustomCLICommands\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(name:'swag-command:example')]

class ExampleCommand extends Command
{
    protected function configure():void
    {
        $this->setDescription("DoesSomething very special");
    }
    // Actual Command
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('It works');
        return Command::SUCCESS;
    }
}