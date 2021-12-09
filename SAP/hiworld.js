module.exports = class say {
  hola(req) { return `Hola amig@s ${req.data.to}!` }
}
