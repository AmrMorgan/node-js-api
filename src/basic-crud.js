
function getData(request, response) {

    console.log('GET /')

    const mockResponse = {
        student: {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com'
        }
    }

    response.send(mockResponse);

}

function saveData(request, response) {

    console.log('POST /save')
    console.dir(request.body);

    response.send({
        status: 'sucess'
    });

}

module.exports = { getData, saveData }
