let modInfo = {
	name: "The Feline Shrine Tree",
	id: "uncannycat",
	author: "SorbetTheShark",
	pointsName: "Points",
	modFiles: ["shrines.js", "tree.js", "awrodr04.js", "ach.js"],
	discordName: "There is no Dedicated Discord Server",
	discordLink: "https://google.com",
	initialStartPoints: new Decimal (10),
	offlineLimit: 1,
	beatable: false
}

let debug = false

let VERSION = {
	num: "1.1",
	name: "Laser Eyes",
}

let changelog = (`
	<h1> Changelog </h1> <br> <br>
		<h3> v1.0 (The Big Bang) </h3> <br>
			- Added FS Layer 
			<br> <br>
		<h3> v1.1 (Laser Eyes) </h3> <br>
			- Added AW Layer <br?
			- Added ACH Layer <br>
			- Improved Layer Layouts
	`
)

let winText = function() {
	if (beatable === false) {
		return "You aren't supposed to be here you cheater..."
	} else {
		return "Congratulations! You have destroyed the Feline Shrine and killed all of its inhabitants, for now..."
	}
}

var doNotCallTheseFunctionsEveryTick = []

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

function canGenPoints(){
	return true
}

function getPointGen() {
	let gain = new Decimal(0)

	if (hasUpgrade('s', 11)) gain = gain.add(1.5)
	if (hasUpgrade('s', 12)) gain = gain.times(1.5)
	if (hasUpgrade('s', 13)) gain = gain.add(upgradeEffect('s', 13))
	if (hasUpgrade('s', 21)) gain = gain.times(1.33)
	if (hasUpgrade('s', 22)) gain = gain.times(1.25)
	if (hasUpgrade('s', 23)) gain = gain.pow(1.1)

	if (hasUpgrade('aw', 11)) gain = gain.times(2.5)
	if (hasUpgrade('aw', 21)) gain = gain.pow(1.15)
	if (hasUpgrade('aw', 23)) gain = gain.times(upgradeEffect('aw', 23))

	gain = gain.times(awEff())

	return gain
}

function addedPlayerData() {
	return {
	}
}

var displayThings = [
	"<i style='color:gray'> You aren't supposed to beat the game yet... </i>"
]

function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}

var backgroundStyle = {

}

function maxTickLength() {
	return(3600)
}

function fixOldSave(oldVersion){

}

function upgradeStyle() {
	return {
		width: '175px',
		height: '120px'
	}
}