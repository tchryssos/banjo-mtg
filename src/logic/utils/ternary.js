export default (bool, truthy, falsey) => {
	if (bool) {
		return truthy
	}
	return falsey
}
