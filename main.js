let numClicks = 0
let velocity = 1
let priceUp1 = 100

function sumClick() {

	numClicks = numClicks + velocity
	document.getElementById("counter").innerHTML = "Clicks: " + numClicks

}

function upgradeOne() {
	if (numClicks > priceUp1) {
		velocity++
		numClicks = numClicks - priceUp1
		priceUp1 = priceUp1 * 2
		document.getElementById("counter").innerHTML = "Clicks: " + numClicks
	}
}
