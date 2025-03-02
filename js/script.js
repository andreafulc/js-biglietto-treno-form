const userForm = document.getElementById("ticketForm");
console.log(userForm);

const userNameInput = document.getElementById("user");
console.log(userNameInput);

const userDistanceInput = document.getElementById("distance");
console.log(userDistanceInput);

const userAgeInput = document.getElementById("age");
console.log(userAgeInput);





userForm.addEventListener("submit", handleUserForm);

function handleUserForm(event) {
    event.preventDefault();
    console.log("userform");
    const username = userNameInput.value;
    const userdistance = userDistanceInput.value; 
    const userage = userAgeInput.value;
    const allData = `${username} ${userdistance} ${userage}`;
    console.log(allData);
};
