var amqp = require('amqplib/callback_api');
var msg = process.argv.slice(2).join(' ') || "Hello World!";
amqp.connect('amqp://node-rabbit', (err, conn)=>{
    conn.createChannel((err, channel) => {
        var queue = 'task_queue';

        channel.assertQueue(queue, {durable: true});

        channel.sendToQueue(queue, new Buffer(msg), {persistent: true});
        console.log( `[x] Sent '${msg}'`)
        setTimeout(()=> { conn.close(); process.exit(0) }, 500);
    })
})