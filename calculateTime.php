<?php

/**
 * @author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
 * Created at: 06/05/2021 18:16
 */

if (filter_input(INPUT_POST, 'batteryCapacity', FILTER_VALIDATE_INT)) {

    include_once "src/MAhToHour.php";

    $mAhToHour = new MAhToHour();
    $mAhToHour->setDeviceBatteryCapacity(filter_input(INPUT_POST, 'deviceBatteryCapacity', FILTER_VALIDATE_INT));
    $mAhToHour->setDeviceApproxChargeTime(filter_input(INPUT_POST, 'deviceApproxChargeTime', FILTER_VALIDATE_FLOAT));
    $mAhToHour->setBatteryCapacity(filter_input(INPUT_POST, 'batteryCapacity', FILTER_VALIDATE_INT));
    ?>
    <strong>Tempo aprox. de recarga: <?= $mAhToHour->mAhToHour(); ?></strong>
    <?php
}

?>
