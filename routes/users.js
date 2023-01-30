const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Hey its from users router')
})

module.exports = router