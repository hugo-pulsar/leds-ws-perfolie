let cor = 0
let strip = neopixel.create(DigitalPin.P0, 124, NeoPixelMode.RGB)
strip.showColor(neopixel.hsl(cor, 100, 60))
basic.forever(function () {
    cor = Math.map(input.acceleration(Dimension.Strength), 1023, 3000, 0, 60)
    strip.showColor(neopixel.hsl(90, 100, cor))
})
