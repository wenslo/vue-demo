/**
 * 小于10的数字格式化，ex: 3 => 03
 * @param {number} m 要转换的数字
 */
function add0 (m) {
	return m < 10 ? '0' + m : m
}

/**
 * 时间戳转日期，格式为yyyy/mm/dd hh:mm:ss
 * @param {number} val 时间戳
 */
export const timestamp2date = (val) => {
	let time = new Date(val)
	let y = time.getFullYear()
	let m = time.getMonth() + 1
	let d = time.getDate()
	let h = time.getHours()
	let mm = time.getMinutes()
	let s = time.getSeconds()
	return `${y}/${add0(m)}/${add0(d)} ${add0(h)}:${add0(mm)}:${add0(s)}`
}
