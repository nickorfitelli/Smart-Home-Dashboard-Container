# Smart Home Dashboard :iphone:

This is a smart home dashboard component that will be a piece of a greater "Family Management Application". It allows you to manage your smart home devices with an easy to use dashboard.


## App Features
1) Add/Remove smart home devices to the dashboard
2) Turn on/off your smart devices
3) Schedule when your devices turn on and off
4) 
5) 

## User Stories
:heavy_check_mark:-As a user, I want to be able to see all of my connected smart devices

:heavy_check_mark:-As a user, I want to be able to add a new smart device

:heavy_check_mark:-As a user, I want to be able to edit a smart device

:heavy_check_mark:-As a user, I want to be able to turn on/off a particular smart device

:heavy_check_mark:-As a user, I want to be able to remove a smart device

:exclamation:-As a user, I want to be able to schedule when my smart devices turn on/off

## ERD

![Image of Erd](https://github.com/nickorfitelli/Smart-Home-Dashboard-Container/blob/master/erd.png)


## Data Endpoints

`GET/device `- Get all smart home devices

`POST/device `- Add new deivce to system 

```
@RequestBody
{
"device_name": "Bedroom",
"device_type": "Facebook Portal",
"state": "True"
}
```

`PATCH/device`- Update smart device information

`DELETE/device`- Delete smart device from system

`GET/schedule ` Get all scheduled device information

`POST/schedule` Add new scheduled device to calendar

`PATCH/schedule`- Update scehduled device

`DELETE/schedule`- Delete scheduled device

# Mockup


![Image of Proto](https://github.com/nickorfitelli/Smart-Home-Dashboard-Container/blob/master/proto.png)

