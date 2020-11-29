function z () {
    OLED.writeStringNewLine("HELP ME")
}
function y () {
    OLED.writeStringNewLine("REQUESTING FOR FOOD")
}
function x () {
    OLED.writeStringNewLine("REQUESTING FOR DRINKS")
}
OLED.init(128, 64)
basic.forever(function () {
    basic.showString("PRESS A FOR FOOD B FOR DRINKS C FOR HELP")
    // press A!
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
        y()
    }
    // press B!
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
        x()
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        z()
    }
    // else...
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P0)) {
    	
    } else {
        basic.showString("WAITING...")
    }
})
