<table class="table" style="margin-top: 10px">
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>BrighterBins package</td>
        <td>October 13th, 2024</td>
        <td>Detailed description of the API of the BrighterBins package.</td>
    </tr>
    </tbody>
</table>

# Overview

The BrighterBins package allows easily connect your Slingr application with BrighterBins.

## Configuration

You'll need a BrighterBins account.

### Email

This is the email of your account.

### Password

This is the password of your account.

## Javascript API

### Vision

```js
let res = pkg.brighterbins.vision.list();
let device = res.devices[0].id;
let now = new Date().getTime();
let hourAgo = now - 3600000;
let data = pkg.brighterbins.vision.timeseries(device, hourAgo, now);
```

## Dependencies

* HTTP Service (v1.7.0)

## About SLINGR

SLINGR is a low-code rapid application development platform that speeds up development,
with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
