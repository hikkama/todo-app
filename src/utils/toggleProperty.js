export default function toggleProperty(id, arr, prop) {
  return arr.map((el) => (el.id === id ? { ...el, [prop]: !el[prop] } : { ...el }))
}
