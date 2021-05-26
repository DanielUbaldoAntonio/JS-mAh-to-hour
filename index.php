<!--
@author Daniel Ubaldo Antônio <danielubaldovrb@gmail.com>
Created at: 05/05/2021 14:25
-->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="robot" content="noindex, nofollow">
    <meta name="googlebot" content="noindex, nofollow">
    <title>Cálculo de tempo de recarga</title>
    <link rel="stylesheet" href="assets/css/style.min.css">
</head>
<body>
<h1>Cálculo de tempo de recarga</h1>
<table>
    <tr>
        <th colspan="3">Carregador PHILIPS Universal Multilife SCB1485NB</th>
    </tr>
    <tr>
        <th>Tamanho da pilha</th>
        <th>Capacidade da pilha</th>
        <th>Tempo aprox. de recarga</th>
    </tr>
    <tr>
        <td>AA NiMH</td>
        <td class="center">2600 mAh</td>
        <td class="center">15½ h</td>
    </tr>
    <tr>
        <td>AA NiMH</td>
        <td class="center">2100 mAh</td>
        <td class="center">12½ h</td>
    </tr>
    <tr>
        <td>AA NiMH</td>
        <td class="center">1300 mAh</td>
        <td class="center">7⅔ h</td>
    </tr>
    <tr>
        <td>AAA NiMH</td>
        <td class="center">1000 mAh</td>
        <td class="center">15 h</td>
    </tr>
    <tr>
        <td>AAA NiMH</td>
        <td class="center">700 mAh</td>
        <td class="center">10½ h</td>
    </tr>
</table>
<form action="calculateTime.php" autocomplete="off" id="timeCalculationForm" method="post" name="timeCalculationForm">
    <p>
        <label for="batterySize">Tamanho da pilha</label>
        <br>
        <select id="batterySize" name="batterySize" onchange="changeBattery(this)">
            <option selected value="1">AA - Pilha comum</option>
            <option value="2">AAA - Pilha palito</option>
        </select>
    </p>
    <fieldset>
        <legend>Sobre o carregador</legend>
        <p>
            <label for="deviceBatteryCapacity">Capacidade da pilha (mAh)</label>
            <br>
            <input id="deviceBatteryCapacity" min="1" minlength="1" name="deviceBatteryCapacity" placeholder="Ex.: 2100"
                   required type="number" value="2100">
        </p>
        <p>
            <label for="deviceApproxChargeTime">Tempo aprox. de recarga (hora)</label>
            <br>
            <input id="deviceApproxChargeTime" min="1.0" minlength="1" name="deviceApproxChargeTime"
                   pattern="^\d{1,2}\.\d{1,2}$"
                   placeholder="Ex.: 12.5" required title="Use ponto para separar os decimais" type="text"
                   value="12.5">
        </p>
    </fieldset>
    <fieldset>
        <legend>Sobre a bateria a ser recarregada</legend>
        <p>
            <label for="batteryCapacity">Capacidade da pilha (mAh)</label>
            <br>
            <input id="batteryCapacity" min="1" minlength="1" name="batteryCapacity" placeholder="Ex.: 2100"
                   required type="number">
        </p>
    </fieldset>
    <br>
    <button type="submit">Calcular</button>
    <button type="reset">Limpar</button>
</form>
<p id="approxChargeTime"></p>
<script src="assets/js/bottom-scripts.min.js"></script>
</body>
</html>
