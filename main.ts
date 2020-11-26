function c () {
    OLED.writeStringNewLine("HELP ME")
}
function b () {
    OLED.writeStringNewLine("REQUESTING FOR DRINKS")
}
function a () {
    OLED.writeStringNewLine("REQUESTING FOR FOOD")
}
OLED.init(128, 64)
basic.forever(function () {
    basic.showString("PRESS A FOR FOOD B FOR DRINKS C FOR HELP")
    // prees A!
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
        a()
    }
    // press B!
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
        b()
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        c()
    }
    // else...
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P0)) {
    	
    } else {
        basic.showString("WAITING...")
    }
})
