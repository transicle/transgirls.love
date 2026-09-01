// automatically update my age because i'm a lazy loser

const birthday = new Date("2008-11-18T00:00:00");
const age_elem = document.getElementById("age");

if (age_elem)
{
    const today = new Date();
    var age = today.getFullYear() - birthday.getFullYear();

    const is_birthday = today.getMonth() > birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());

    if (!is_birthday)
    {
        age -= 1;
    }

    age_elem.textContent = String(age);
}