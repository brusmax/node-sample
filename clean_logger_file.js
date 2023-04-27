const fs = require('fs');

fs.open(global.FILE_LOGGER, 'w', (err, fd) => {
  if (err) throw err;

  fs.close(fd, (err) => {
    if (err) throw err;

    console.log(FILE_LOGGER + "file cleaned");
  });
});