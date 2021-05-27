function byId(id) {
    return document.getElementById(id);
}

function queSel(selector) {
    return document.querySelector(selector);
}

byId("batterySize").addEventListener("change", function () {
    let vBat = byId("batterySize").options[byId("batterySize").selectedIndex];
    if (parseInt(vBat.value) === 1) {
        byId("deviceBatteryCapacity").value = 2100;
        byId("deviceApproxChargeTime").value = "12.5";
    } else if (parseInt(vBat.value) === 2) {
        byId("deviceBatteryCapacity").value = 1000;
        byId("deviceApproxChargeTime").value = "15.0";
    }
    byId("batteryCapacity").focus();
    byId("approxChargeTime").innerHTML = "";
});

window.addEventListener("load", function () {
    byId("batteryCapacity").focus();
});

byId("deviceBatteryCapacity").addEventListener("focus", function () {
    byId("deviceBatteryCapacity").select();
});

byId("deviceApproxChargeTime").addEventListener("focus", function () {
    byId("deviceApproxChargeTime").select();
});

byId("batteryCapacity").addEventListener("focus", function () {
    byId("batteryCapacity").select();
});

queSel("button[type=\"reset\"]").addEventListener("click", function () {
    byId("batteryCapacity").focus();
    byId("approxChargeTime").innerHTML = "";
});

byId("timeCalculationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let deviceBatteryCapacity, deviceApproxChargeTime, batteryCapacity, mAhToHour;
    deviceBatteryCapacity = byId("deviceBatteryCapacity").value;
    deviceApproxChargeTime = byId("deviceApproxChargeTime").value;
    batteryCapacity = byId("batteryCapacity").value;
    if (isNaN(parseInt(deviceBatteryCapacity))) {
        alert("O campo \"Capacidade da pilha (mAh)\" deve conter números.");
    } else if (isNaN(parseFloat(deviceApproxChargeTime))) {
        alert("O campo \"Tempo aproximado de recarga (hora)\" deve conter números com ao menos uma casa decimal.");
    } else if (isNaN(parseInt(batteryCapacity))) {
        alert("O campo \"Capacidade da pilha (mAh)\" deve conter números.");
    } else {
        mAhToHour = new MAhToHour();
        mAhToHour.setDeviceBatteryCapacity(deviceBatteryCapacity);
        mAhToHour.setDeviceApproxChargeTime(deviceApproxChargeTime);
        mAhToHour.setBatteryCapacity(batteryCapacity);
        byId("approxChargeTime").innerHTML = "<strong>Tempo aproximado de recarga:<br></strong>" + mAhToHour.mAhToHour();
    }
});
