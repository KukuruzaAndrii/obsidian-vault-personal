a = 1
b = 3
console.log("a=", a, " b=", b, "a+b=", a + b)

str = `1
2
3
4`

console.log(str)
console.log("--")

spl = str.split("\n")
console.log(spl)

res = 0

for (let i = 0; i < spl.length; i++) {
	//console.log(i);
	//console.log(spl[i]);
	n = Number(spl[i]);
	console.log(n);
	res = res + n;
}

console.log(res)
console.log("-----")


str2=`1
+
3
-
1
*
2`

spl2 = str2.split("\n")
console.log(spl2)

res2 = 0
op = ""
for (let i = 0; i < spl2.length; i++) {
	el = spl2[i]
	if (i % 2 == 0) {
		n = Number(el)
		console.log(n)
		if (op == "+") {
			res2 = res2 + n
		} else if (op == "-") {
			res2 = res2 - n
		} else if (op == "*") {
			res2 = res2 * n
		} else if (op == "/") {
			res2 = res2 / n
		} else {
			res2 = n
		}
	} else {
		op = el
		console.log(op)
	}
}
console.log(res2)


