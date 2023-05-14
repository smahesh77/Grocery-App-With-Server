function errorHnadler(err, req, res, next) {
    if(typeof err == 'string'){
        return res.status(400).json({message: err})
    }

    if(err.name == 'Validationerror'){
        return res.status(400).json({message: err.message})

    }

    if(err.name == 'UnauthorizedError'){
        return res.status(400).json({message: err.message})

    }

    return res.status(400).json({message: err.message})

} 

module.exports = {
    errorHnadler
}