/****************************************************
 Trackers API
 ****************************************************/

const api = pkg.brighterbins.api;

exports.list = function () {
    return api.get('/trackers/list');
}

exports.timeseries = function (id, from, to) {
    return api.post('/trackers/timeseries/v2', {
        body: {
            id: id,
            from: from,
            to: to,
        }
    });
}
