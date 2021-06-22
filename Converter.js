
function F2CtemperatureConverter(InputNum) {
    InputNum = parseFloat(InputNum);
    document.getElementById("outputCelcius").innerHTML=(InputNum-32)/1.8;
  }
  function C2FtemperatureConverter(InputNum) {
    InputNum = parseFloat(InputNum);
    document.getElementById("outputFahrenheit").innerHTML=(InputNum*1.8)+32;}