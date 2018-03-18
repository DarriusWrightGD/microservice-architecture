# Async Implementation

Tools used: RabbitMQ, NodeJS, Express

## Setting Up Infrastructure Through Docker Commands

``` powershell
docker network create micro-network
```

``` powershell
docker run -p 15672:15672 -v ${PWD}/rabbit:/var/lib/rabbitmq/mnesia/rabbit@node-rabbit --network micro-network -h node-rabbit --name node-rabbit -d rabbitmq:3
docker exec -it node-rabbit /bin/bash
rabbitmq-plugins enable rabbitmq_management
```
Note: **After running checkout http://localhost:15672 for the management portal guest/guest**

``` powershell
docker run -it -v ${PWD}:/app -w /app --network micro-network --name node-micro -p 3000:3000 node:boron /bin/bash
```

## Managing Infrastructure

``` powershell 
docker exec -it node-rabbit /bin/bash
rabbitmqctl list_queues
```