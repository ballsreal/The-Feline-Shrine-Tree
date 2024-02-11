addLayer("s", {
    symbol: "🎖",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "ghostwhite",
    requires: new Decimal(10),
    resource: "FS Points",
    baseResource: "Points",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.35,
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {return new Decimal(1)},
    row: 0,
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Roblox",
            description: "Gain a static 1.5 Points/second.",
            cost: new Decimal(1),
            style() {return upgradeStyle()}
        },

        12: {
            title: "Mindustry",
            description: "Multiply point gain by 1.5x.",
            cost: new Decimal(3),
            style() {return upgradeStyle()}
        },

        13: {
            title: "Event Horizon",
            description: "Additively increase point gain based on FS Points.",
            cost: new Decimal(5),
            effect() {return player.s.points.pow(0.8)},
            effectDisplay() {return `+${format(this.effect(),3)}`},
            style() {return upgradeStyle()},
            tooltip: "FSP^0.8"
        },

        21: {
            title: "Ultrakill",
            description: "Multiply point gain by 1.33x.",
            cost: new Decimal(20),
            style() {return upgradeStyle()}
        },

        22: {
            title: "Itch.io",
            description: "Multiply point gain by 1.25x.",
            cost: new Decimal(35),
            style() {return upgradeStyle()}
        },

        23: {
            title: "Discord",
            description: "Raise point gain to the power of 1.1.",
            cost: new Decimal(65),
            style() {return upgradeStyle()}
        },

        31: {
            title: "Laser Eyes",
            description: "Meet Awrodr04",
            cost: new Decimal(250),
            style() {return upgradeStyle()}
        }
    }
})
