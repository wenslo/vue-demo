console.log('test')
function deepEqual (x, y) {
	return (x && y && typeof x === 'object' && typeof y === 'object')
		? (Object.keys(x).length === Object.keys(y).length) &&
		Object.keys(x).reduce(function (isEqual, key) {
			return isEqual && deepEqual(x[key], y[key])
		}, true) : (x === y)
}

let arr = [
	{ 'a': 1, 'b': 2 },
	{ 'a': 1, 'b': 2 },
	{ 'a': 2, 'b': 3 }
]

for (var i = 0; i < 50000; i++) {
	arr.push({ 'a': 2, 'b': 3 })
}
console.log('arr length is ' + arr.length)
var start = Date.now()

var result = []
for (var i = 0; i < arr.length; i++) {
	if (!arr[i].handle) {
		var obj = arr[i]

		if (i == arr.length - 1) {
			if (!arr[i].handle) {
				break;
			}
			result.push(obj)
		}
		if (obj.handle) {
			continue;
		}
		result.push(obj)
		for (var j = i+1; j < arr.length; j++) {
			var flag = deepEqual(obj, arr[j])
			if (flag) {
				arr[j].handle = true
			}
		}
	} else {
		continue
	}
}
var end = Date.now()
console.log(result)
console.log('The filtered arr size is ' + result.length + ', invoked time is ' + (end - start) + 'ms')
