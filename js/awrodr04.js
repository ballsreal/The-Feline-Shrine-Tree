addLayer("aw", {
    symbol: "AW",
    position: 0,
    startData() { return {
        unlocked() {
            if (debug) {
                return true
            } else {
                return hasAchievement('ach', 11)
            }
        },
		points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0)
    }},
    color: "navy",
    requires: new Decimal(325),
    resource: "Lasers",
    baseResource: "FS Points",
    baseAmount() {return player.s.points},
    type: "static",
    exponent: 1,
    base() {return awBase()},
    roundUpCost: true,
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {return new Decimal(1)},
    row: 1,
    layerShown(){
        if (debug) {
            return true
        } else {
            return hasAchievement('ach', 11)
        }
    },
    upgrades: {
        11: {
            title: "Laser Pointer",
            description: "Multiply point gain by 2.5x.",
            cost: new Decimal(1),
            style() {return upgradeStyle()}
        },

        12: {
            title: "Prism",
            description: "Multiply FS Point gain by 1.35x.",
            cost: new Decimal(1),
            style() {return upgradeStyle()},
            unlocked() {return hasUpgrade('aw', 11)}
        },

        13: {
            title: "Laser Cannon",
            description: "Multiply laser's effect base by 1.3x.",
            cost: new Decimal(1),
            style() {return upgradeStyle()},
            unlocked() {return hasUpgrade('aw', 12)}
        },

        21: {
            title: "Piezo",
            description: "Raise point gain to the power of 1.15.",
            cost: new Decimal(1),
            style() {return upgradeStyle()},
            unlocked() {return hasUpgrade('aw', 13)}
        },

        22: {
            title: "Gamma Ray",
            description: "Decrease laser cost scaling by 15%.",
            cost: new Decimal(1),
            style() {return upgradeStyle()},
            unlocked() {return hasUpgrade('aw', 21)}
        },

        23: {
            title: "Supernova",
            description: "Multiply point gain based on total lasers.",
            cost: new Decimal(1),
            style() {return upgradeStyle()},
            effect() {return player.aw.total.pow(1.15)},
            effectDisplay() {return `x${this.effect()}`},
            unlocked() {return hasUpgrade('aw', 22)}
        }
    },
    effectDescription() {return `which is multiplying point gain by ${format(awEff(),2)}x (based on best)`},
    microtabs: {
        index: {
            "Upgrades": {
                content: ["blank", "upgrades"]
            },

            "Info": {
                content: ["blank"]
            }
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        "blank",
        ["microtabs", "index"]

    ],

    componentStyles: {
        "microtabs"() {
            return {
                'border':'0 solid transparent'
            }
        }
    },

    glowColor: "crimson"
})

function awEff() {
    let base = new Decimal(1.3)

    if (hasUpgrade('aw', 13)) base = base.times(1)

    return player.aw.best.add(1).pow(base)
    
}

function awBase() {
    let base = new Decimal(1)

    if (hasUpgrade('aw', 22)) base = base.times(0.85)

    return base
}