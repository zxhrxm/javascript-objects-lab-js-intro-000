function updateObjectWithKeyAndValue(object, key, value) {
  var object2 = Object.assign({}, object)
  object2.key = 'value'
  console.log(object2)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
  if ((delete object.key) === true);
    return object
}
