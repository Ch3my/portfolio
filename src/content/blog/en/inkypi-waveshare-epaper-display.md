---
title: Inkpi waveshare epaper display
date: 2025-04-11
slug: inkypi-waveshare-epaper-display
lang: en
---

# TL;DR

1.- Install Inkypi, following repo instructions

2.- Execute `sudo /usr/local/inkypi/venv_inkypi/bin/python -m pip install gpiozero lgpio RPi.GPIO` to install dependencies needed by waveshare

3.- Go to `/boot/firmware/config.txt` and comment line "dtoverlay=spi0-0cs" or change it to "dtoverlay=spi0-2cs". Executing the command `ls /dev/spi*` should return two things

4.- At this point waveshare demo should work

5.- Clone waveshare repo `git clone https://github.com/waveshareteam/e-Paper.git`

6.- Copy folder `waveshare_epd` from waveshare repo into `src/` folder of inkypi repo

7.- In `display_manager.py` add your import, according to your screen model:

```
from waveshare_epd import epd7in3e
```

8.- In `display_manager.py` replace the following:

```
self.inky_display = auto()
self.inky_display.set_border(self.inky_display.BLACK)
```

with you display driver name
```
self.epd = epd7in3e.EPD()
self.epd.init()
```

and all instances of
```
self.inky_display.show()
```
with
```
self.epd.display(self.epd.getbuffer(image))
```

the line

```
device_config.update_value("resolution",[int(self.inky_display.width), int(self.inky_display.height)], write=True)
```

replace with

```
device_config.update_value("resolution",[int(self.epd.width), int(self.epd.height)], write=True)
```

# How to connect Waveshare epaper display to Inkypi

## Inkypi project

> InkyPi is an open-source, customizable E-Ink display powered by a Raspberry Pi. Designed for simplicity and flexibility, it allows you to effortlessly display the content you care about, with a simple web interface that makes setup and configuration effortless.

source: [Inkypi](https://github.com/fatihak/InkyPi)

As of today (2025-04-11), there is no official way to connect Waveshare screens to this project. However, Waveshare displays are inexpensive, widely available on AliExpress, and come in various sizes with both color and black-and-white options, making them a good alternative if you're on a budget. That said, the recommended screen for this project is still the Inky Impression from Pimoroni.

## Connect Waveshare screen to Raspberry
The HAT have a 40pin connector to connect directly to raspberry, you can use that and just slap the HAT into the Raspberry

Otherwise use the following pin configuration

TODO. Double Check pin connection, check if hat connection works fine without finetune and ad image

**NOTE**: The pin configuration is defined inside `epdconfig.py` inside the Waveshare repo

### IMPORTANT
Many dependencies may be already installed, or `Inkypi/install/install.sh` takes care of them. 

Run this command to install dependencies needed by waveshare

```
sudo /usr/local/inkypi/venv_inkypi/bin/python -m pip install gpiozero lgpio RPi.GPIO
```
If you get errors running the inkypi executable inside `install/` execute this (to install in venv)

If everything is ok, you can skip to **Test the screen**

### Waveshare Installation in Raspberry
**IMPORTANT: Only execute this step if something is missing or not installed**

Although instructions are available at [waveshare website](https://www.waveshare.com/wiki/7.3inch_e-Paper_HAT_(E)_Manual#Working_With_Raspberry_Pi) here I include the easy version focusing on Raspberry and Python3 only

### Enable SPI Interface

Open the Raspberry Pi terminal and enter the following command in the config interface:
```
sudo raspi-config
Choose Interfacing Options -> SPI -> Yes Enable SPI interface
```
Then reboot your Raspberry Pi:
```
sudo reboot
```
Check /boot/config.txt, and you can see 'dtparam=spi=on' is present. should look like this:
```
dtparam=i2c_arm=on
dtparam=spi=on
```

To make sure SPI is not occupied, it is recommended to close other drivers' coverage. You can use `ls /dev/spi*` to check whether SPI is occupied
```
$ ls /dev/spi*
/dev/spidev0.0 /dev/spidev0.1
```

Check if spi have 2 entries, if only has one then you need to:

The install script for inky-pi adds dtoverlay=spi0-0cs straight after the dtparam=spi=on and dtparam=i2c_arm=on entries. This is to enable chip select for the inkypi device (see Pimori Inky Install Manually). This has the effect of disabling the other spi line that the Waveshare device needs.

You can fix it be removing that line from /boot/firmware/config.txt or add dtoverlay=spi0-2cs which verbosely enables both SPI interfaces.

Thanks acspt!

### Install libraries
Install function library
```
sudo apt-get update
sudo apt-get install python3-pip
sudo apt-get install python3-pil
sudo apt-get install python3-numpy
sudo pip3 install spidev
```

Install gpiozero library (it is installed in the system by default, if not, you can install it by following the commands below)
```
sudo apt-get update
sudo apt install python3-gpiozero
```

### Test the screen

Download the demo via GitHub (You can skip this step if you have downloaded it.)
```
git clone https://github.com/waveshare/e-Paper.git
cd e-Paper/RaspberryPi_JetsonNano/
```
Run the demo
```
# Make sure it's in e-Paper/RaspberryPi_JetsonNano/
cd python/examples/
python3 epd_7in3e_test.py
```

If you see the screen flashing and showing text and images means everything is working properly


## Inkypi installation and configuration
Follow instructions from [Inkypi repo](https://github.com/fatihak/InkyPi)

Copy the folder `waveshare_epd` from e-Paper/RaspberryPi_JetsonNano/ to `src/` of Inkypi folder

Look for your display driver name inside  `waveshare_epd` folder. Usually is `"epd" + inches of the display + a letter`. This is what we will use when modifying Inkypi code. In my case my driver name is `epd7in3e` for 7.3 inches color display

Add corresponding import to `display_manager.py`
```
from waveshare_epd import epd7in3e
```

In `display_manager.py`, replace:
```
self.inky_display = auto()
self.inky_display.set_border(self.inky_display.BLACK)
```

with you display driver name
```
self.epd = epd7in3e.EPD()
self.epd.init()
```

and all instances of
```
self.inky_display.show()
```
with
```
self.epd.display(self.epd.getbuffer(image))
```
At the time of writing this guide there is only one line to replace in `display_manager.py` file


Also the line

```
device_config.update_value("resolution",[int(self.inky_display.width), int(self.inky_display.height)], write=True)
```

replace with

```
device_config.update_value("resolution",[int(self.epd.width), int(self.epd.height)], write=True)
```

### Check status

To check status you can use 
```
systemctl status inkypi.service
```

For troubleshooting review [text](https://github.com/fatihak/InkyPi/blob/main/docs/troubleshooting.md)

Some plugins require API_KEYS review [text](https://github.com/fatihak/InkyPi/blob/main/docs/api_keys.md)

## Important links

- [Waveshare 7.3in E Documentation](https://www.waveshare.com/wiki/7.3inch_e-Paper_HAT_(E)_Manual#Working_With_Raspberry_Pi)
- [Waveshare driver](https://github.com/waveshareteam/e-Paper/tree/master)
- [Inkypi repository](https://github.com/fatihak/InkyPi)
- [Github issue explaining Waveshare connection to Inkypi](https://github.com/fatihak/InkyPi/issues/15)
