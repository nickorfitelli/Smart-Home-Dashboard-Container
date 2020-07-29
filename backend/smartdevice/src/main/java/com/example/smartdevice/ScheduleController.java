package com.example.smartdevice;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping({"/schedule"})
public class ScheduleController {
    private final ScheduleRepository repository;
    private final DeviceRepository deviceRepository;

    public ScheduleController(ScheduleRepository repository, DeviceRepository deviceRepository) {
        this.repository = repository;
        this.deviceRepository = deviceRepository;
    }

    @GetMapping({""})
    public Iterable<Schedule> getScheduleAll() {
        return this.repository.findAll();
    }

    @PostMapping({"/{id}"})
    public Schedule addSchedule(@RequestBody Schedule schedule, @PathVariable Long id) {
        Optional<Device> device = this.deviceRepository.findById(id);
        if (device.isPresent()) {
            schedule.setDevice((Device)device.get());
            return (Schedule)this.repository.save(schedule);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "entity not found");
        }
    }

    @PatchMapping({"/{id}"})
    public Schedule updateSchedule(@RequestBody Schedule schedule, @PathVariable Long id) {
        if (this.repository.findById(id).isPresent()) {
            schedule.setId(id);
            schedule.setDevice(((Schedule)this.repository.findById(id).get()).getDevice());
            return (Schedule)this.repository.save(schedule);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "entity not found");
        }
    }
}