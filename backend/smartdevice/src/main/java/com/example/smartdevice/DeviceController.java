package com.example.smartdevice;

import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping({"/devices"})
public class DeviceController {
    private final DeviceRepository repository;

    public DeviceController(DeviceRepository repository) {
        this.repository = repository;
    }

    @GetMapping({""})
    public Iterable<Device> getDevices() {
        return this.repository.findAll();
    }

    @PostMapping({""})
    public Device addDevice(@RequestBody Device device) {
        return (Device)this.repository.save(device);
    }

    @PatchMapping({"/{deviceid}"})
    public Object updateDevice(@PathVariable long deviceid, @RequestBody Device update) {
        Optional<Device> result = this.repository.findById(deviceid);
        if (result.isPresent()) {
            update.setId(((Device)result.get()).getId());
            return this.repository.save(update);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "entity not found");
        }
    }

    @PatchMapping({"/power"})
    public String powerDevice(@RequestParam String state, @RequestParam Long id) {
        if (this.repository.findById(id).isPresent()) {
            Optional<Device> device = this.repository.findById(id);
            if (device.isPresent()) {
                Device update = (Device)device.get();
                if (state.equals("on")) {
                    update.setState(true);
                    this.repository.save(update);
                    return "Device is now on";
                }

                if (state.equals("off")) {
                    update.setState(false);
                    this.repository.save(update);
                    return "Device is now off";
                }

                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "entity not found");
            }
        }

        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "entity not found");
    }

    @DeleteMapping({"/delete"})
    public String deleteDevice(@RequestParam Long id) {
        if (this.repository.findById(id).isPresent()) {
            this.repository.deleteById(id);
            return "ok";
        } else {
            return "error";
        }
    }
}