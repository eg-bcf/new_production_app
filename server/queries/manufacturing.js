var knex = require("../knex.js");

const Values = () => {
  return knex('values')
}

const addField = (area, value) => {
  return Values()
          .insert({
            'area': area,
            'value': value
          })
}

const updateField = (area, value) => {
  return Values()
          .where({
            'area': area
          })
            .update({
              'value': value
            })
}

const getField = (area) => {
  return Values()
          .where({
            'area': area
          })
          .max('value_id')
            .then( res => {
              return (Values()
                      .where({
                        'value_id': res[0]['max(`value_id`)']
                      }))
            })
}

module.exports = {
  addField,
  getField,
  updateField
}
