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
> v0.3.1 is here! See the _release notes_ below.

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

## NPM Versions

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

- OS X Mavericks (10.9)
- Raspbian GNU/Linux 7 (Wheezy)
- Amazon Linux 2014.09.x
- Windows 8.1

## Release Notes

<strong>v0.3.1</strong>
<ul>
  <li>Added Windows compatibility</li>
</ul>

<strong>v0.3.0</strong>
<ul>
  <li>Added command to show the version of included selenium standalone server</li>
  <li>Added lib.init to handle start, stop, and clear</li>
</ul>

<strong>v0.2.0</strong>
<ul>
  <li>Fixed: unable to stop server after running start twice</li>
  <li>Added library to handle selenium jar & pid</li>
</ul>

<strong>v0.1.0</strong>
<ul>
  <li>Added functionality to stop server.</li>
</ul>
