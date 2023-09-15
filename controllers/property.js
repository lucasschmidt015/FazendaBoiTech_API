exports.findCattles = (req, res, next) => {
    res.json([{
        name: 'Belinha',
        age: 5,
    }, {
        name: 'Katarina',
        age: 4,
    }])
}

exports.findCattle = (req, res, next) => {
    res.json({
        name: 'Katarina',
        age: 4,
    })
}

exports.addCattle = (req, res, next) => {
    res.json({
        success: true 
    })
}

exports.getEditCattle = (req, res, next) => {
    res.json({
        name: 'Katarina',
        age: 4,
    })
}

exports.postEditCattle = (req, res, next) => {
    res.json({
        success: true 
    })
}

exports.deleteCattle = (req, res, next) => {
    res.json({
        success: true 
    })
}