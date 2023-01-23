// Define some variables to associate them to the value captured in the textarea
const newMessage = document.querySelector(".section__new_message--textarea");
const changeMessage = document.querySelector(".section__change_message--textarea");
// Div that contain labels into the encrypt message text field
const changeMessageLabels = document.querySelector(".section__change_message--labels");


// Event triggering the function to encrypt the text
function btnEncrypt() {
    // Capture the text typed in the HTML input field and apply encrypt function
    const textEncrypt = encrypt(newMessage.value);
    // Display on the screen the result of the encrypted text
    changeMessage.value = textEncrypt;

    // Clear the New Message text field
    newMessage.value = "";
    // Clear the image and labels of encrypted message text field
    changeMessage.style.backgroundImage = "none";
    changeMessageLabels.style.display = 'none';
}

// The function for encrypting the text is created, it must receive a parameter
function encrypt(encryptedMessage) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encryptedMessage = encryptedMessage.toLowerCase()
    encryptedMessage = encryptedMessage.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Iterate in the matrix and check the respective key to develop the cipher logic
    for(let i = 0; i < matrixCode.length; i++) {
        if (encryptedMessage.includes(matrixCode[i][0])) {
            encryptedMessage = encryptedMessage.replaceAll(matrixCode[i][0], matrixCode[i][1])
        }
    }
    return encryptedMessage;
}


// Event triggering the function to desencrypt the text
function btnDesencrypt() {
    // Capture the text typed in the HTML input field and apply encrypt function
    const textEncrypt = desencrypt(newMessage.value);
    // Display on the screen the result of the encrypted text
    changeMessage.value = textEncrypt;
    newMessage.value = "";
    // Clear the image and labels of encrypted message text field
    changeMessage.style.backgroundImage = "none";
    changeMessageLabels.style.display = 'none';
}

// The function for desencrypting the information is created
function desencrypt(desencryptedMessage) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    desencryptedMessage = desencryptedMessage.toLowerCase()
    desencryptedMessage = desencryptedMessage.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    for(let i = 0; i < matrixCode.length; i++) {
        if (desencryptedMessage.includes(matrixCode[i][1])) {
            desencryptedMessage = desencryptedMessage.replaceAll(matrixCode[i][1], matrixCode[i][0])
        }
    }
    return desencryptedMessage;
}


// Copy function to take the text contained in the text field of the encrypted message
function copy() {
    var textCopy = changeMessage.value;
    navigator.clipboard.writeText(textCopy);
}