package com.example.smartdevice;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(
        name = "Schedule"
)
public class Schedule {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;
    @JsonFormat(
            shape = Shape.STRING,
            pattern = "MM-dd-yyyy"
    )
    private Date start_date;
    @JsonFormat(
            shape = Shape.STRING,
            pattern = "MM-dd-yyyy"
    )
    private Date end_date;
    @JsonFormat(
            shape = Shape.STRING,
            pattern = "HH:mm"
    )
    private Date start_time;
    @JsonFormat(
            shape = Shape.STRING,
            pattern = "HH:mm"
    )
    private Date end_time;
    private boolean reoccurance;
    @ManyToOne
    private Device device;

    public Schedule() {
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getStart_date() {
        return this.start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return this.end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public Date getStart_time() {
        return this.start_time;
    }

    public void setStart_time(Date start_time) {
        this.start_time = start_time;
    }

    public Date getEnd_time() {
        return this.end_time;
    }

    public void setEnd_time(Date end_time) {
        this.end_time = end_time;
    }

    public boolean isReoccurance() {
        return this.reoccurance;
    }

    public void setReoccurance(boolean reoccurance) {
        this.reoccurance = reoccurance;
    }

    public Device getDevice() {
        return this.device;
    }

    public void setDevice(Device device) {
        this.device = device;
    }
}
