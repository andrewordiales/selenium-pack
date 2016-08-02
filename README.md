# Selenium Pack
NPM Package to install-and-run [selenium standalone server](http://docs.seleniumhq.org/download/).

## Prerequisites

- Java Runtime

## Installation

```
$ sudo npm install selenium-pack -g
```

> **Current Release**
>
> v0.3.6 is here!

## Versioning

```
X.Y.Z-A.B.C

X.Y.Z - Selenium pack version

A.B.C - Selenium standalone server version

e.g. 0.0.1-2.46.0 contains selenium server version 2.46.0
```

## Usage

Start/Run the selenium server:
```
$ selenium start
```

Stop the running selenium server:
```
$ selenium stop
```

To show the version of the included selenium standalone server
```
$ selenium version
```

Print the path of the selenium standalone server jar
```
$ selenium path
```

## Running Inside your Code

```
var selenium-pack = require('selenium-pack');

// Starts the selenium server
selenium-pack.init.start();

// Stops the running server
selenium-pack.init.stop();

```


## Passing arguments

Use a config file (`selenium.conf.json`) to pass arguments to selenium standalone server.

Selenium pack searches for `selenium.conf.json` in the following precedence:

<ol>
  <li>Current working directory</li>
  <li>Inside a folder named "config" in the current working directory</li>
</ol>

`selenium.conf.json` uses JSON Format and must pass a [JSON Validator](http://jsonlint.com)

Sample `selenium.conf.json` format:

```
{
  "port": 8080,
  "timeout": 120
}
```

## NPM Versions

<strong>Selenium Server v2.53.1</strong>
<ul>
  <li>0.3.6-2.53.1</li>
</ul>

<strong>Selenium Server v2.53.0</strong>
<ul>
  <li>0.3.4-2.53.0</li>
</ul>

<strong>Selenium Server v2.48.2</strong>
<ul>
  <li>0.3.4-2.48.2</li>
  <li>0.3.3-2.48.2</li>
  <li>0.3.2-2.48.2</li>
</ul>

<strong>Selenium Server v2.47.1</strong>
<ul>
  <li>0.3.1-2.47.1</li>
  <li>0.3.0-2.47.1</li>
  <li>0.2.0-2.47.1</li>
</ul>

<strong>Selenium Server v2.46.0</strong>
<ul>
  <li>0.3.0-2.46.0</li>
  <li>0.2.0-2.46.0</li>
  <li>0.1.0-2.46.0</li>
</ul>

## Tested Running in

- OS X Mavericks (10.9) & Yosemite (10.10.5)
- Raspbian GNU/Linux 7 (Wheezy)
- Amazon Linux 2014.09.x
- Windows 8.1

## Change Log

Please see [CHANGELOG.md](https://github.com/andruandru/selenium-pack/blob/master/CHANGELOG.md)
