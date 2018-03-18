var amqp = require('amqplib/callback_api');
var msg = process.argv.slice(2).join(' ') || "Hello World!";
amqp.connect('amqp://node-rabbit', (err, conn)=>{
    conn.createChannel((err, channel) => {
        var exchangeName = 'logs';

        channel.assertExchange(exchangeName, 'fanout', {durable: false});

        channel.publish(exchangeName, '', new Buffer(msg));
        console.log( `[x] Sent '${msg}'`)
        setTimeout(()=> { conn.close(); process.exit(0) }, 500);
    })
})