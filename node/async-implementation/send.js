var amqp = require('amqplib/callback_api');
amqp.connect('amqp://node-rabbit', (err, conn)=>{
    conn.createChannel((err, channel) => {
        var queue = 'hello';

        channel.assertQueue(queue, {durable: false});

        channel.sendToQueue(queue, new Buffer('Hello World 2!'));
        console.log(" [x] Sent 'Hello World!' ")
        setTimeout(()=> { conn.close(); process.exit(0) }, 500);
    })
})