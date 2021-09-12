var elForm = document.querySelector('.container__form');
elForm.addEventListener('submit', function(money) {
  money.preventDefault();
    var elInput = Number(document.querySelector('.container__form-input').value);
    var elSelect = document.querySelector('.select-type').value;
    var elSelectResult = document.querySelector('.returning_selected').value;

    var calculator = elInput;

    var USD_TO_SUM = 10700;
    var EUR_TO_SUM = 12700;
    var RUB_TO_SUM = 142.0;

    if(elSelect === 'usd') 
    {
        calculator *= USD_TO_SUM;}
      else if(elSelect === 'eur') {
        calculator *= EUR_TO_SUM;}
         else if(elSelect === 'rub') {
           calculator *= RUB_TO_SUM;
    }

    var resultCalculator = calculator;

    if(elSelectResult === 'usd')
    {
        resultCalculator /= USD_TO_SUM;}
      else if(elSelectResult === 'eur') {
        resultCalculator /= EUR_TO_SUM;}
          else if(elSelectResult === 'rub') {
            resultCalculator /= RUB_TO_SUM;
    }


    document.querySelector('.calculated_input').value = `${resultCalculator}`;
})