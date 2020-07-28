# Smart Home Dashboard :iphone:

This is a smart home dashboard component that will be a piece of a greater "Family Management Application". It allows you to manage your smart home devices with an easy to use dashboard.

https://img.shields.io/github/last-commit/nickorfitelli/Smart-Home-Dashboard-Container?style=plastic


## App Features
1) Add/Remove smart home devices to the dashboard
2) Turn on/off your smart devices
3) Schedule when your devices turn on and off
4) View Schedule

## User Stories
:heavy_check_mark:-As a user, I want to be able to see all of my connected smart devices

:heavy_check_mark:-As a user, I want to be able to add a new smart device

:heavy_check_mark:-As a user, I want to be able to edit a smart device

:heavy_check_mark:-As a user, I want to be able to turn on/off a particular smart device

:heavy_check_mark:-As a user, I want to be able to remove a smart device

:heavy_check_mark:-As a user, I want to be able to schedule when my smart devices turn on/off

## ERD

![Image of Erd](https://github.com/nickorfitelli/Smart-Home-Dashboard-Container/blob/master/erd.png)


## Data Endpoints

### Device

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

`PATCH/device/{deviceid}`- Update smart device information

```
@RequestBody
{
"device_name": "Bedroom",
"device_type": "Facebook Portal",
"state": "True"
}
```

`PATCH/device/power?state=on&id=1`- Update scehduled device

`DELETE/device/delete?deviceid=1`- Delete smart device from system

### Schedule

`GET/schedule ` Get all scheduled device information

`POST/schedule/{id}` Add new schedule to device with {id} (device id)

```
{
    "start_date": "08-03-2020",
    "end_date": "08-03-2020",
    "start_time": "12:30",
    "end_time": "13:30",
    "reoccurance": "false"
}
```

`PATCH/schedule/{id}`- Update schedule with {id} (schedule id)

```
{
    "start_date": "07-03-2020",
    "end_date": "09-03-2020",
    "start_time": "11:30",
    "end_time": "16:30",
    "reoccurance": "true"
}
```

`DELETE/schedule/{id}`- Delete schedule with {id} (schedule id)

# Mockup


![Image of Proto](https://github.com/nickorfitelli/Smart-Home-Dashboard-Container/blob/master/proto.png)

