/****************************************************
 Bins API
 ****************************************************/

const api = pkg.brighterbins.api;

exports.list = function () {
    return api.get('/bins/list');
} 

exports.timeseries = function (id, from, to) {
    return api.post('/bins/timeseries', {
        body: {
            id: id,
            from: from,
            to: to,
        }
    });
}
