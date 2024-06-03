document.getElementById('deliveryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let origin = document.getElementById('origin').value;
    let destination = document.getElementById('destination').value;
    let weight = document.getElementById('weight').value;
    let deliveryType = document.getElementById('deliveryType').value;
    let address = document.getElementById('address').value;

    if (!origin || !destination || !weight || !deliveryType || !address) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    let basePrice = deliveryType === 'express' ? 750 : 250;
    let additionalWeight = Math.max(0, weight - 10);
    let additionalCost = Math.ceil(additionalWeight / 4) * 100;
    let additionalCityCost = origin !== destination ? 100 : 0;
    let totalPrice = basePrice + additionalCost + additionalCityCost;

    let resultText = origin === destination
        ? `Стоимость доставки посылки весом ${weight} кг составит ${totalPrice} рублей.`
        : `Стоимость доставки посылки из города ${origin} в ${destination} весом ${weight} кг составит ${totalPrice} рублей.`;
    document.getElementById('calculationResult').textContent = resultText;
    document.getElementById('calculationResult').style.display = 'block';

    let pickupPoints = {
        "Москва": ["Зубовский бульвар, 2с2", "Огородный проезд, 12"],
        "Санкт-Петербург": ["Ленинский проспект, 144к1", "Суздальский проспект, 57"],
        "Севастополь": ["улица Вакуленчука, 20", "улица Генерала Мельника, 150"],
        "Казань": ["Даурская улица, 16Д", "улица Восстания, 8"],
        "Екатеринбург": ["Рижский переулок, 4", "улица Челюскинцев, 106"],
        "Челябинск": ["улица Дарвина, 2", "улица Куйбышева, 75"],
        "Новосибирск": ["площадь Карла Маркса, 3", "улица Гоголя, 42"],
        "Ростов-на-Дону": ["улица Мадояна, 119", "улица 26 Июня, 98А"],
        "Невинномысск": ["улица Баумана, 4А", "улица Гагарина, 74"],
        "Красноярск": ["улица Академика Киренского, 43", "Октябрьская улица, 10"]
    };

    let pointsText;
    if (origin === destination) {
        pointsText = `Пункты LightPost в городе ${origin}:<br>1. ${pickupPoints[origin][0]}<br>2. ${pickupPoints[origin][1]}<br><br>Ждем вас в нашем офисе для оформления посылки!`;
    } else {
        pointsText = `Пункты отправки в городе ${origin}:<br>1. ${pickupPoints[origin][0]}<br>2. ${pickupPoints[origin][1]}<br><br>Пункты получения в городе ${destination}:<br>1. ${pickupPoints[destination][0]}<br>2. ${pickupPoints[destination][1]}<br><br>Ждем вас в нашем офисе для оформления посылки!`;
    }

    document.getElementById('pickupPoints').innerHTML = pointsText;
    document.getElementById('pickupPoints').style.display = 'block';

    // Автоматическая прокрутка страницы вниз
    document.getElementById('calculationResult').scrollIntoView({ behavior: 'smooth' });
});
