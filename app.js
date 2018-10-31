const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

let dataSet = [];


/**
 * Method to fetch data from the third party
 * @param url
 * @returns {Promise<any>}
 */
async function getData(url) {
    let response = await fetch(url);
    return await response.json();
}

getData(url)
    .then(res => {
        dataSet = res.features;
        getStateSpecificDate('ca', dataSet);
    });

/**
 * Method to get state specific info
 * @param state {String}
 * @param dataSet {Array}
 */
function getStateSpecificDate(state = 'CA', dataSet) {
    let result = [];
    if (state) {
        result = dataSet.filter(item => {
            let placeArr = item.properties.place.toLowerCase().split(', ');
            return (placeArr.includes('california') || placeArr.includes('ca'));
        });
    }
    sortChrono(result);
    result = printData(result);
    let ul = document.querySelector('ul');
    result.forEach(item => {
        let li = document.createElement('li');
        let content = document.createTextNode(item)
        li.appendChild(content);
        ul.appendChild(li);
    })
}


/**
 *  Method to Sort the array based on the Date - (ascending)
 * @param arr {Array}
 */
function sortChrono(arr) {
    if (arr && arr.length > 0) {
        arr.sort((a, b) => {
            return a.properties.time - b.properties.time;
        })
    }
}


/**
 * Method to get data in required format
 * @param arr {Array}
 * @returns {Array}
 */
function printData(arr) {
    let result = [];
    if (arr && arr.length > 0) {
        result = arr.map(item => {
            let data = item.properties;
            let time = new Date(data.time).toISOString().replace('Z', '+00:00');
            let timeArr = time.split('.');
            timeArr[1] = timeArr[1].split('+')[1];
            return `${timeArr[0]}+${timeArr[1]} | ${data.place} | Magnitude: ${data.mag}`;
        })
    }
    return result;
}


