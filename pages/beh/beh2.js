module.exports = Behavior({
  data: {
    from: 'beh2'
  },
  behaviors: [],
  definitionFilter(defFields, definitionFilterArr) {
    defFields.data.from = defFields.data.from
    console.log(defFields.data.from )
  },
})