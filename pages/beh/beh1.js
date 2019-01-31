module.exports = Behavior({
  data: {
    from: 'beh1'
  },
  behaviors: [require('./beh2')],
  definitionFilter(defFields, definitionFilterArr) {
    defFields.data.from = defFields.data.from
    console.log(defFields.data.from )
  },
})