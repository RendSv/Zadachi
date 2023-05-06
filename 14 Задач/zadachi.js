/// ЗАДАЧА 1

zadacha1 = "привет мир!"

console.log("ЗАДАЧА 1: ", zadacha1[0].toUpperCase() + zadacha1.substring(1, zadacha1.length))

/// ЗАДАЧА 2

zadacha2 = [2, 3, 5, -1]
summaZadacha2 = 0

for (let i = 0; i < zadacha2.length; i++) {
    const element = zadacha2[i];
    summaZadacha2 = summaZadacha2 + element
}

console.log("ЗАДАЧА 2: ", summaZadacha2)

/// ЗАДАЧА 3

zadacha3 = [1, 3, 5]
summaZadacha3 = 0
function funcZadacha3(zadacha3) {
    
    for (let i = 0; i < zadacha3.length; i++) {
        const element = zadacha3[i];
        summaZadacha3 = summaZadacha3 + element
    }
    return summaZadacha3
}
console.log("ЗАДАЧА 3: ", funcZadacha3(zadacha3))

/// ЗАДАЧА 4 

zadacha4 = 'Здрав000ствуйте'
for (let i = 0; i < zadacha4.length; i++) {
    const element = zadacha4[i];
    if (element == "0") or (element == "1") or (element == "2") or (element == "3") or (element == "4") or (element == "5") or (element == "6") or (element == "7") or (element == "8") or (element == "9") {
        element.replace(element, '!')
    }
    otvetZadacha4 = ''
    otvetZadacha4 = otvetZadacha4 + element
}
console.log("ЗАДАЧА 4: ", otvetZadacha4)