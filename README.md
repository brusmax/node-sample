# Cobal-log v1.4.5 test with node v18.16

This project is a test sample to test a node project v18.16 with cobalt-log (v1.4.5)

# Setup

Be sure of be using the required node version.

In this case, this was testd using versions: v10.24.1 and v18.16 LTD.

```
  $node -v
```

if not, the recomendation is to use NVM (node version manager).

[How to instal nvm](https://heynode.com/tutorial/install-nodejs-locally-nvm/)

Instal version v18.16.0
```
  $nvm install v18.16.0
  $nvm use v18.16.0
```
The same procedure for any version required, just select the desired one

# Clone Sample 
Open a terminal and clone the sample project
```
  $git clone git@github.com:brusmax/node-sample.git
```

Enter folder created:
```
  $cd node-sample
```

install packages

```
  $npm install
```

run project
```
  $node index.js
```

you should be loggers working on the console and the file cobalt_logger.log