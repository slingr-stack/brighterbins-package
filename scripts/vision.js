/****************************************************
 Vision API
 ****************************************************/

 const api = pkg.brighterbins.api;

exports.list = function () {
    return api.get('/vision/list');
} 

exports.timeseries = function (id, from, to, pageNumber, pageSize) {
    pageNumber = pageNumber || 1;
    pageSize = pageSize || 10;
    return api.post('/vision/timeseries/v2', {
        body: {
            id: id,
            from: from,
            to: to,
            page_number: pageNumber,
            page_size: pageSize,
        }
    });
};


