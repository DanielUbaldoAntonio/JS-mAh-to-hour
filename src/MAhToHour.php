<?php

/**
 * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
 * Created at: 05/05/2021 14:29
 */


class MAhToHour
{
    /**
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     * Created at: 05/05/2021 14:36
     * @var int
     *
     * AA - 1 - Pilha comum;
     * AAA - 2 - Pilha palito
     *
     */
    private $batterySize = 1;
    /**
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     * Created at: 05/05/2021 14:36
     * @var int
     */
    private $batteryCapacity = 1;
    /**
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     * Created at: 05/05/2021 14:36
     * @var string
     */
    private $approxChargeTime = "00:00:00";
    /**
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     * Created at: 05/05/2021 14:36
     * @var int
     */
    private $deviceBatteryCapacity = 1;
    /**
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     * Created at: 05/05/2021 14:36
     * @var double
     */
    private $deviceApproxChargeTime = 1.0;

    /**
     * MAhToHour constructor.
     */
    public function __construct()
    {
    }

    /**
     * @return int
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    public function getBatterySize()
    {
        return $this->batterySize;
    }

    /**
     * AA - 1 - Pilha comum;
     * AAA - 2 - Pilha palito
     *
     * @param int $batterySize
     * @return int
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    public function setBatterySize(int $batterySize)
    {
        $this->batterySize = $batterySize;
    }

    /**
     * @return int
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    public function getBatteryCapacity()
    {
        return $this->batteryCapacity;
    }

    /**
     * @param int $batteryCapacity
     * @return int
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    public function setBatteryCapacity(int $batteryCapacity)
    {
        $this->batteryCapacity = $batteryCapacity;
    }

    /**
     * @return string
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    public function getApproxChargeTime()
    {
        return $this->approxChargeTime;
    }

    /**
     * @param string $approxChargeTime
     * @return string
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    public function setApproxChargeTime(string $approxChargeTime)
    {
        $this->approxChargeTime = $approxChargeTime;
    }

    /**
     * @return int
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    public function getDeviceBatteryCapacity()
    {
        return $this->deviceBatteryCapacity;
    }

    /**
     * @param int $deviceBatteryCapacity
     * @return int
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    public function setDeviceBatteryCapacity(int $deviceBatteryCapacity)
    {
        $this->deviceBatteryCapacity = $deviceBatteryCapacity;
    }

    /**
     * @return double
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    public function getDeviceApproxChargeTime()
    {
        return $this->deviceApproxChargeTime;
    }

    /**
     * @param double $deviceApproxChargeTime
     * @return double
     * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
     */
    public function setDeviceApproxChargeTime(float $deviceApproxChargeTime)
    {
        $this->deviceApproxChargeTime = $deviceApproxChargeTime;
    }


    /**
     * Se A está para B, C está para D
     *
     * @param double|int $a A
     * @param double|int $b B
     * @param double|int $c C
     * @return double|int D
     */
    public function proporcion($a, $b, $c)
    {
        return ($b * $c) / $a;
    }

    public function mAhToHour()
    {
        $hourFull = $this->proporcion(
            $this->getDeviceBatteryCapacity(),
            $this->getDeviceApproxChargeTime(),
            $this->getBatteryCapacity()
        );
        if ($hourFull > 0) {
            $hoursFraction = explode(".", $hourFull);
            if (is_array($hoursFraction)) {
                $hour = ($hoursFraction[0] > 9) ? $hoursFraction[0] : "0{$hoursFraction[0]}";
                $minutesFull = (sizeof($hoursFraction) > 1) ? round("0.{$hoursFraction[1]}", 2) : "00";
                if ($minutesFull > 0) {
                    $minutesFraction = $this->proporcion(1, 60, $minutesFull);
                    $minutes = explode(".", ($minutesFraction > 0) ? $minutesFraction : "00");
                    if (is_array($minutes)) {
                        $minutes = (strlen($minutes[0]) > 1) ? $minutes[0] : "00";
                    } else {
                        $minutes = "00";
                    }
                } else {
                    $minutes = "00";
                }
            } else {
                $hour = ($hoursFraction > 9) ? $hoursFraction : "0{$hoursFraction}";
                $minutes = "00";
            }
        } else {
            $hour = "00";
            $minutes = "00";
        }
        $this->setApproxChargeTime("{$hour}:{$minutes}");

        return $this->getApproxChargeTime();
    }
}
