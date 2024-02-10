var express = require('express')
var router = express.Router();

router.get('/evento',function(req,req) {
    res.send(`Lista evento`);
});

router.post('/evento',function(req,res) {
    res.send(`Adicionar evento`)
})

router.put('/evento/:id',function (req,res) {
    res.send(`Atualiza evento ${req.params.id}`)

})

router.delete('/evento/:id',function(req,res) {
    res.send(`Deleta evento ${req.params.id}`)
})

module.exports = router;