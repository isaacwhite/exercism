package leap

func IsLeapYear(y int) bool {
	// must be divisible by 4
	if y%4 != 0 {
		return false
	}

	// must not be a century, unless divisible by 400
	if y%100 == 0 && y%400 != 0 {
		return false
	}

	return true
}
