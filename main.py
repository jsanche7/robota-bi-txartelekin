radio.set_group(1)

def on_forever():
    if input.acceleration(Dimension.X) > 200:
        pass
    if input.acceleration(Dimension.X) < -200:
        pass
    if input.acceleration(Dimension.Y) > 200:
        pass
    if input.acceleration(Dimension.Y) < -200:
        pass
basic.forever(on_forever)
