/****************************************************
 Vision API
 ****************************************************/

exports.vision = {
    list: () => pkg.brighterbins.get('/vision/list'),
    timeseries: (id, from, to, pageNumber, pageSize) => {
    pageNumber = pageNumber || 1;
    pageSize = pageSize || 10;
    return pkg.brighterbins.post('/vision/timeseries/v2', {
        body: {
            id: id,
            from: from,
            to: to,
            page_number: pageNumber,
            page_size: pageSize,
        }
    }),
};


