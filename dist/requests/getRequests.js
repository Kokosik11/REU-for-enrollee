fetch("/request")
    .then(result => {
        console.log(result.json())
    })
    .catch(err => {
        console.log(err);
    })