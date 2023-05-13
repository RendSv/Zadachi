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

zadacha4 = '123Здрав123ствуйте123'
otvetZadacha4 = ''
for (let i = 0; i < zadacha4.length; i++) {
    const element = zadacha4[i];
    if (element == "0" || element == "1" || element == "2" || element == "3" || element == "4" || element == "5" || element == "6" || element == "7" || element == "8" || element == "9") {
        otvetZadacha4 = otvetZadacha4 + element.replace(element, '!')
        continue
    }
    otvetZadacha4 = otvetZadacha4 + element
}
console.log("ЗАДАЧА 4: ", otvetZadacha4)

/// ЗАДАЧА 5 

/// ЗАДАЧА 6

zadacha6 = [1, 2, 1, 2]
kolichestvoDney = 0

for (let i = 0; i < zadacha6.length; i++) {
    let element = zadacha6[i];
    if (element != 2) {
        if (element <  2) {
            element = element + 1
            zadacha6[i] = zadacha6[i] + 1
        }
        if (element >  2) {
            element= element - 1
            zadacha6[i] = zadacha6[i] - 1
        }
        if (element !=2) {
            i--
        }
        kolichestvoDney += 1
    }
}
console.log("ЗАДАЧА 6: ", kolichestvoDney)

/// ЗАДАЧА 7 

array1Zadacha7 = [1, 2, 3]
array2Zadacha7 = [5, 3, 2]
array3Zadacha7 = [7, 3, 2]
function sumOfCommon(array1Zadacha7, array2Zadacha7, array3Zadacha7) {
    summaZadacha7 = 0
    array1Zadacha7.sort()
    array2Zadacha7.sort()
    array3Zadacha7.sort()
    i1 = array1Zadacha7.length
    i2 = array2Zadacha7.length
    i3 = array3Zadacha7.length
    while (i1 > 0 && i2 > 0 && i3 > 0) {
        i1--
        i2--
        i3--
        if (array1Zadacha7[i1] > array2Zadacha7[i2] && array1Zadacha7[i1] > array3Zadacha7[i3]) {
            i2++
            i3++
        }
        else if (array2Zadacha7[i2] > array1Zadacha7[i1] && array2Zadacha7[i2] > array3Zadacha7[i3]) {
            i1++
            i3++
        }
        else if (array3Zadacha7[i3] > array2Zadacha7[i2] && array3Zadacha7[i3] > array1Zadacha7[i1]) {
            i2++
            i1++
        }
        else {
            summaZadacha7 = summaZadacha7 + array1Zadacha7[i1]
        }

    }
    return summaZadacha7
}
console.log("ЗАДАЧА 7: ", sumOfCommon(array1Zadacha7, array2Zadacha7, array3Zadacha7))

/// ЗАДАЧА 8 

/// ЗАДАЧА 9 

slovo1Zadacha9 = "покажи"
slovo2Zadacha9 = "пока"
proverka = 0

function canMakeString(slovo1Zadacha9, slovo2Zadacha9) {
    for (let i = 0; i < slovo1Zadacha9.length; i++) {
        const element1 = slovo1Zadacha9[i];
        for (let j = 0; j < slovo2Zadacha9.length; j++) {
            const element2 = slovo2Zadacha9[j];
            if (element1 == element2) {
                proverka = proverka + 1
            }
        }   
    }
    if (proverka == slovo2Zadacha9.length) {
        return true
    }
    else
        return false
}
console.log("ЗАДАЧА 9: ", canMakeString(slovo1Zadacha9, slovo2Zadacha9))

/// ЗАДАЧА 10

/// ЗАДАЧА 11