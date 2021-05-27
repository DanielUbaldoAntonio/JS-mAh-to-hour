/**
 * MAhToHour
 *
 * @example
 *
 * mAhToHour = new MAhToHour();
 * mAhToHour.setDeviceBatteryCapacity(2100);
 * mAhToHour.setDeviceApproxChargeTime(12.5);
 * mAhToHour.setBatteryCapacity(2500);
 * mAhToHour.mAhToHour();
 */
function MAhToHour() {
    /**
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     * Created at: 26/05/2021
     *
     * AA - 1 - Pilha comum;
     * AAA - 2 - Pilha palito
     *
     */
    let batterySize = 1;
    /**
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     * Created at: 26/05/2021
     */
    let batteryCapacity = 1;
    /**
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     * Created at: 26/05/2021
     */
    let approxChargeTime = "00:00:00";
    /**
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     * Created at: 26/05/2021
     */
    let deviceBatteryCapacity = 1;
    /**
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     * Created at: 26/05/2021
     */
    let deviceApproxChargeTime = 1.0;

    /**
     * @return number
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    this.getBatterySize = function () {
        return batterySize;
    };

    /**
     * AA - 1 - Pilha comum;
     * AAA - 2 - Pilha palito
     *
     * @param {Number} pBatterySize
     * @return number
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    this.setBatterySize = function (pBatterySize) {
        batterySize = pBatterySize;
    };

    /**
     * @return number
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    this.getBatteryCapacity = function () {
        return batteryCapacity;
    };

    /**
     * @param {Number} pBatteryCapacity
     * @return number
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    this.setBatteryCapacity = function (pBatteryCapacity) {
        batteryCapacity = pBatteryCapacity;
    };

    /**
     * @return string
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    this.getApproxChargeTime = function () {
        return approxChargeTime;
    };

    /**
     * @param {String} pApproxChargeTime
     * @return string
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    this.setApproxChargeTime = function (pApproxChargeTime) {
        approxChargeTime = pApproxChargeTime;
    };

    /**
     * @return number
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    this.getDeviceBatteryCapacity = function () {
        return deviceBatteryCapacity;
    };

    /**
     * @param {Number} pDeviceBatteryCapacity
     * @return number
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    this.setDeviceBatteryCapacity = function (pDeviceBatteryCapacity) {
        deviceBatteryCapacity = pDeviceBatteryCapacity;
    };

    /**
     * @return number
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    this.getDeviceApproxChargeTime = function () {
        return deviceApproxChargeTime;
    };

    /**
     * @param {Number} pDeviceApproxChargeTime
     * @return number
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    this.setDeviceApproxChargeTime = function (pDeviceApproxChargeTime) {
        deviceApproxChargeTime = pDeviceApproxChargeTime;
    };

    /**
     * Se A está para B, C está para D
     *
     * @param {Number} a A
     * @param {Number} b B
     * @param {Number} c C
     * @return number  D
     */
    function proporcion(a, b, c) {
        return (b * c) / a;
    }

    this.mAhToHour = function () {

        let hourFull, hoursFraction, hour, minutesFull, minutesFraction, minutes, time;

        hourFull = proporcion(
            this.getDeviceBatteryCapacity(),
            this.getDeviceApproxChargeTime(),
            this.getBatteryCapacity()
        );

        if (hourFull > 0) {
            hoursFraction = hourFull.toString().split(".");
            if (Array.isArray(hoursFraction)) {
                hour = (hoursFraction[0] > 9) ? hoursFraction[0] : "0" + hoursFraction[0];
                minutesFull = (hoursFraction.length > 0) ? +(Math.round(parseFloat("0." + hoursFraction[1]) + "e+2") + "e-2") : "00";
                if (minutesFull > 0) {
                    minutesFraction = proporcion(1, 60, minutesFull);
                    minutesFraction = (minutesFraction > 0) ? minutesFraction : "00";
                    minutes = minutesFraction.toString().split(".");
                    if (Array.isArray(minutes)) {
                        if (minutes[0].length > 0) {
                            if (parseInt(minutes[0]) === 60) {
                                hour++;
                                minutes = "00";
                            } else if (minutes[0] > 0 && minutes[0] < 60) {
                                minutes = (minutes[0] > 9) ? minutes[0] : "0" + minutes[0];
                            } else {
                                minutes = "00";
                            }
                        } else {
                            minutes = "00";
                        }
                        // minutes = (minutes[0].length > 1) ? minutes[0] : "00";
                    } else {
                        minutes = "00";
                    }
                } else {
                    minutes = "00";
                }
            } else {
                minutes = "00";
                hour = (hoursFraction > 9) ? hoursFraction : "0" + hoursFraction;
            }
        } else {
            hour = "00";
            minutes = "00";
        }

        /*hour = (hour == "00") ? "" : hour;
        hour = (hour != "00" && hour > 1) ? hour + " horas e " : hour + " hora e ";*/

        if (hour !== "00") {
            hour = (hour > 1) ? hour + " horas e " : hour + " hora e ";
        } else {
            hour = "";
        }

        minutes = (minutes > 1) ? minutes + " minutos" : minutes + " minuto";

        time = hour + minutes;

        this.setApproxChargeTime(time);

        return this.getApproxChargeTime();
    };
}
