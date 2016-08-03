import { objectAssign } from 'commons'
//console.log(objectAssign({foo: 0}, {bar: 1}))
const Storage = localStorage

export default { get, set, clear }

// getter
export function get(name, defaults = null) {
  var data

  try {
    data = JSON.parse(Storage.getItem(name))
  } catch (e) {
    data = null
  }

  if (!data) {
    data = objectAssign({}, defaults)
    data && set(name, defaults)
  }

  return data
}

// setter
export function set(name, state) {
  Storage.setItem(name, JSON.stringify(state))
}

// clear all storage
export function clear() {
  Storage.clear()
}
