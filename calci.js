function appendInput(value) {
    document.getElementById('result').value += value;
  }

  function clearInput() {
    document.getElementById('result').value = '';
  }

  function calculate() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;}
    // JavaScript functions for calculator functionality
    function appendInput(value) {
      document.getElementById('result').value += value;
    }

    function clearInput() {
      document.getElementById('result').value = '';
    }

    function calculate() {
      var result = eval(document.getElementById('result').value);
      document.getElementById('result').value = result;
    }

    document.getElementById('result').style.color = 'red';
