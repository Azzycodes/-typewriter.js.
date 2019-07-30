const message = "hello there from lighthouse labs" 
for (let i = 0; i < message.length; i++) {
  setTimeout(() => {
    process.stdout.write(message[i])
  }, i * 50)
};

setTimeout(() => {
  console.log('\n');
}, message.length * 50)
