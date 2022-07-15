# This job is required by the "Smart Methods" Company

## First task: Speech Recognition
A simple code that converts Arabic speech to text using javascript.
### Output
<img width="700" alt="speechTotext" src="https://user-images.githubusercontent.com/94991403/179322145-cc7b8dc3-5712-459f-98ff-942d1932267b.png">



## Second task: Wasdom-ESP32 Link Steps
I'm going to write algorithm for running Wasdom ESP32. To perform the following steps correctly, a connection to the Internet is required.
### Step One:
you need to install Arduino IDE by
 [clicking here](https://www.arduino.cc/en/software)!
### Step Two:
now since the wasdom ESP32 is undefined so you need to define it with Arduino by clicking on ```file > preferences```


<img width="215" alt="1" src="https://user-images.githubusercontent.com/94991403/179323109-ec5cd932-70c2-46cf-971f-6a0bd3f6f0ae.png">

now in ``` Additional Boards Manager URLs ``` put this URL then press ``` OK ```.
```URl
https://dl.espressif.com/dl/package_esp32_index.json
```
<img width="490" alt="2" src="https://user-images.githubusercontent.com/94991403/179323373-dc29057c-e747-4064-b7fb-7871613e2b56.png">

now move to``` Tools > Board: "Arduino uno" > Boards manager```.

<img width="490" alt="3" src="https://user-images.githubusercontent.com/94991403/179323498-0a07bf15-e6b1-4ccb-8b2b-26d9d81d7dcc.png">

then you will get a window, type in the search bar 'ESP32' then press install.

<img width="598" alt="4" src="https://user-images.githubusercontent.com/94991403/179323599-fb6f5767-d6a5-46ff-9dad-774917f0d583.png">

now after these steps when you go to ```Tools > Board: "Arduino uno"``` you will find ESP32 Arduino.


<img width="730" alt="5" src="https://user-images.githubusercontent.com/94991403/179323697-49195247-1311-4651-89db-a50043cd68b1.png">

### Step Three:
now connect Wasdom ESP32 with your computer, then go and choose ```WEMOS D1 MINI ESP32```.

<img width="590" alt="6" src="https://user-images.githubusercontent.com/94991403/179323874-c7c4241a-17bc-4bab-8127-049fa974cc7f.png">

then connect it by clicking on ```Tools > Port."COM3" > COM3```.


<img width="938" alt="7" src="https://user-images.githubusercontent.com/94991403/179324231-ffc67a33-06ea-46a5-8f13-5739dfd7984d.png">

### Step Four:
now we want to make sure that everything is working well so we are going to make the LED turn on and off ```Blink```. by going to ```file > examples > Basics > Blink```.


<img width="509" alt="8" src="https://user-images.githubusercontent.com/94991403/179324529-f0ac3824-6626-47e7-81a5-aa93df7bd17c.png">

after that run it. If the link was successful, the light will flash on and off several times.

