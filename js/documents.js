document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.accordion-button');
    const content = document.getElementById('accordion-content');

    const contents = {
        physical: `
            <ul>
                <li>➤ Паспорт гражданина РФ</li>
                <li>➤ Удостоверение личности военнослужащего РФ</li>
                <li>➤ Военный билет солдата, матроса, сержанта, старшины, прапорщика, мичмана и офицера запаса</li>
                <li>➤ Временное удостоверение личности гражданина РФ (форма N 2П)</li>
            </ul>`,
        legal: `
            <ul>
                <li>➤ Доверенность от организации (оригинал-для одноразовой доверенности, копия/оригинал для многоразовой 
                доверенности) и документ, удостоверяющий личность Представителя организации</li>
            </ul>`,
        eaec: `
            <ul>
                <li>➤ Заграничный паспорт</li>
                <li>➤ Для граждан ЕАЭС документ, удостоверяющий личность, своего государства</li>
            </ul>`,
        kazakhstan: `
            <ul>
                <li>➤ Паспорт гражданина Республики Казахстан</li>
                <li>➤ Удостоверение личности гражданина Республики Казахстан</li>
                <li>➤ Вид на жительство иностранца в Республике Казахстан</li>
                <li>➤ Удостоверение лица без гражданства</li>
                <li>➤ Дипломатический паспорт Республики Казахстан</li>
                <li>➤ Служебный паспорт Республики Казахстан</li>
                <li>➤ Удостоверение беженца</li>
                <li>➤ Паспорт моряка</li>
            </ul>`,
        belarus: `
            <ul>
                <li>➤ Паспорт гражданина Республики Беларусь</li>
                <li>➤ Вид на жительство в Республике Беларусь</li>
                <li>➤ Удостоверение беженца</li>
            </ul>`
    };

    // Показать контент для "Физическим лицам" по умолчанию
    content.innerHTML = contents.physical;
    buttons[0].classList.add('active');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const target = button.getAttribute('data-target');
            content.innerHTML = contents[target];

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});
