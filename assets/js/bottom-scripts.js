function byId(id) {
    return document.getElementById(id);
}
function queSel(selector) {
    return document.querySelector(selector);
}

function changeBattery(vThis) {
    let vBat = vThis.options[vThis.selectedIndex];
    if (parseInt(vBat.value) === 1) {
        byId("deviceBatteryCapacity").value = 2100;
        byId("deviceApproxChargeTime").value = "12.5";
    } else if (parseInt(vBat.value) === 2) {
        byId("deviceBatteryCapacity").value = 1000;
        byId("deviceApproxChargeTime").value = "15.0";
    }
    byId("batteryCapacity").focus();
}

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
    let formAction = byId("timeCalculationForm").getAttribute("action");
    calculateTime(formAction);
});

function serialize(vFormId) {
    let i, params = "", name = "", value = "", formLen = byId(vFormId).elements.length - 2;
    for (i = 0; i < formLen; i++) {
        let nameAndValue = "", separator = "";
        name = byId(vFormId).elements[i].name;
        value = byId(vFormId).elements[i].value;
        if (name) {
            nameAndValue = encodeURIComponent(name) + "=" + encodeURIComponent(value);
            separator = (i === (formLen - 1)) ? "" : "&" ;
        }
        params += nameAndValue + separator;
    }
    return params;
}

function GetXmlHttpObject() {
    let reqObj;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        reqObj = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // code for IE6, IE5
        reqObj = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        reqObj = null;
    }
    return reqObj;
}

function calculateTime(formAction) {
    let xmlhttp = GetXmlHttpObject();
    if (xmlhttp == null) {
        alert("Seu navegador não suporta AJAX!");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            byId("approxChargeTime").innerHTML = xmlhttp.responseText;
        }
    };
    xmlhttp.open("POST", formAction, true);
    xmlhttp.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded; charset=utf-8"
    );
    xmlhttp.send(serialize("timeCalculationForm"));
}
