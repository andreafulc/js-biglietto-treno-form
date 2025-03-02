const userForm = document.getElementById("ticketForm");
console.log(userForm);

const userNameInput = document.getElementById("user");
console.log(userNameInput);

const userDistanceInput = document.getElementById("distance");
console.log(userDistanceInput);

const userAgeInput = document.getElementById("age");
console.log(userAgeInput);

const resultElement = document.getElementById("result");
console.log(resultElement);




userForm.addEventListener("submit", handleUserForm);

function handleUserForm(event) {
    event.preventDefault();
    console.log("userform");
    const username = userNameInput.value;
    const userdistance = userDistanceInput.value; 
    const userage = userAgeInput.value;
    const allData = `${username} ${userdistance} ${userage}`;
    console.log(allData);
    const price = userdistance * 0.21;
    let finalPrice = price;
    if (userage < 18) {
    finalPrice = price - (price * 20 / 100);
    } else if (userage > 65) {
    finalPrice = price - (price * 40 / 100);
    }
    console.log(finalPrice.toFixed(2));
    
};

