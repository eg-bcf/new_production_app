const queries = require("../queries/manufacturing");

module.exports = app => {
  app.post('/value/:areaId', (req, res) => {
    queries.addField(req.params.areaId, JSON.stringify(req.body.values))
      .then( result => {
        res.status(200).json({ 'message': "updated successfully"});
      })
  })
  app.put('/value/:areaId', (req, res) => {
    queries.updateField(req.params.areaId, JSON.stringify(req.body.values))
      .then( result => {
        res.status(200).json({ 'message': "updated successfully"});
      })
  })
  app.get('/value/:areaId', (req, res) => {
    queries.getField(req.params.areaId)
      .then( result => {
        res.status(200).json(result[0].value);
      })
  })
};
