const birthDate = new Date('2008-11-18T00:00:00');
const ageElement = document.getElementById('age');

if (ageElement) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const bday =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!bday) {
        age -= 1;
    }

    ageElement.textContent = String(age);
}