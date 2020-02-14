var connection = require('amqplib').connect('amqp://user:password@localhost:5672');

// Consumer
const consumer = async (ch) => {
  return ch.consume('service_queue', function (msg) {
    if (msg) {
      // Do what you have to do here!
      console.log(msg);
      ch.ack(msg);
    }
  });
}

// Main thread
connection.then((conn) => {
  return conn.createChannel();
}).then(consumer).catch(console.warn);
