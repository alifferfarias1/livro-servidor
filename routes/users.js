const expres = require('express');
const router = expres.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send({mensagem: 'Nenhum usuário cadastrado.'});
});

module.exports = router;
