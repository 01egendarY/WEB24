document.getElementById('trackForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const trackingNumber = document.getElementById('trackingNumber').value;

    let resultText = `Информация о посылке с номером "${trackingNumber}" не найдена.`;
    let resultDiv = document.getElementById('trackingResult');
    resultDiv.innerText = resultText;
    resultDiv.style.display = 'block';

    // Очищаем поле формы
    document.getElementById('trackingNumber').value = '';
});
