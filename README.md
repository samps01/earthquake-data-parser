# Earthquake data parser

Parses the data for getting State specific info from earthquake data set (Now only for California)

## Getting Started

You can run the index.html directly on the browser


### Approach

Right now the state is hard coded as 'CA' or 'California'.

But can filter based on any state

```
we can create a Map of all the State names in any any form and Filter accordingly
```

To improve performance can use

```
Web Worker
```

Time format

```
2017-07-13T20:43:37+00:00 ~ 2017-07-13T20:43:37.000Z => Z - ZULU time +00:00
```

```
printData(arr) method modifies Z to +00:00 format
```

## Authors

* **Samson Pallivathukkal** - [GitHub](https://github.com/samps01)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

#
