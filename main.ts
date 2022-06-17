basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Happy)
    } else {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showIcon(IconNames.Happy)
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.clearScreen()
            }
        }
    }
})
