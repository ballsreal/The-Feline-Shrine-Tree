addLayer("ach", {
    symbol: "<b style='text-shadow:0 0 1px black'/>🏆",
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0)
        }
    },

    color: "goldenrod",
    resource: "Trophies",
    row: 'side',
    type: "none",
    achievements: {
        11: {
            name: "Awrodr04",
            tooltip: "Unlock the <b>AW</b> layer.",
            done() {return hasUpgrade('s', 31)},
            onComplete() {player.ach.points = player.ach.points.add(1)}
        }
    },
    effectDescription() {return `which multiplies point gain by ${format(achEff(), 2)}x`},
    microtabs: {
        index: {
            "Unlocks": {
                content: ["blank", ["achievements", [1]]]
            }
        }
    },
    tabFormat: [
        "main-display",
        "blank",
        ["microtabs", "index"]
    ],
    componentStyles: {
        "microtabs"() {
            return {
                'border':'0 solid transparent'
            }
        }
    }
})

function achEff() {
    return player.ach.points.add(1).pow(1.2)
}