document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var age = document.getElementById("age").value;
    var select = document.getElementById("student");
    var action = radio.value;
    var languaje = document.getElementsByName("box");
    var textarea = document.getElementById("text-area").value;


    console.log(name);
    console.log(mail);
    console.log(age);
    console.log(select);
    console.log(action);
    console.log(languaje);
    console.log(textarea);
});

