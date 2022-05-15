
function encrypt()
{
    var paraEncriptar = document.getElementById("myText1").value; 
    var messageArr = paraEncriptar.split("");
    var encryptedMessageArr = [];
    var ArrWithoutCommas;
    var letter;

    for(i = 0; i < messageArr.length; i++)
    {
        switch(messageArr[i])
        {
            case "a":
                letter = "ai";
                break;
            case "e":
                letter = "enter";
                break;
            case "i":
                letter = "imes";
                break;
            case "o":
                letter = "ober";
                break;
            case "u":
                letter = "ufat";
                break;
            default:
                letter = messageArr[i];
                break;
        }
        encryptedMessageArr.push(letter);
    }

    ArrWithoutCommas = encryptedMessageArr.join("");

    mensaje_final.value = ArrWithoutCommas;
}

function decrypt()
{
    var paraDesencriptar = document.getElementById("myText1").value;
    var subM1 = ["ai", "enter", "imes", "ober", "ufat"];
    var vocales = ["a", "e", "i", "o", "u"];
    var desArr = [];

    for(var i = 0; i < subM1.length; i++)
    {
        if(paraDesencriptar.indexOf(subM1[i]) != -1)
        {
            switch(subM1[i])
            {
                case "ai":
                    desArr = paraDesencriptar.replace(/ai/g, vocales[i]);
                    break;
                case "enter":
                    desArr = paraDesencriptar.replace(/enter/g, vocales[i]);
                    break;
                case "imes":
                    desArr = paraDesencriptar.replace(/imes/g, vocales[i]);
                    break;
                case "ober":
                    desArr = paraDesencriptar.replace(/ober/g, vocales[i]);
                    break;
                case "ufat":
                    desArr = paraDesencriptar.replace(/ufat/g, vocales[i]);
                    break;
            }
            paraDesencriptar = desArr;
        }
    }

    mensaje_final.value = desArr;
}

function copy()
{
    document.querySelector(".resultado textarea").select();
    document.execCommand('copy');
}

var message1 = [];

document.getElementById("myButton1").onclick = encrypt;
document.getElementById("myButton2").onclick = decrypt;
document.getElementById("myButton3").onclick = copy;