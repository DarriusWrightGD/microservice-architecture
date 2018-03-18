var amqp = require('amqplib/callback_api');

amqp.connect('amqp://node-rabbit', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var exchangeName = 'logs';

    ch.assertExchange(exchangeName, 'fanout', {durable: false});
    ch.assertQueue('', {exclusive: true}, (error, q)=>{

      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
      ch.bindQueue(q.queue, exchangeName, '')  
      ch.consume(q.queue, function(msg) {
          console.log(" [x] Received %s", msg.content.toString());
      }, {noAck: true});
    })
  });
});