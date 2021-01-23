//Kilometer to meter

function kilometerToMeter(km) {
    if (km < 0) {
        return "ERROR";
    }
    else {
        var m = 1000*km;
        return m;
    }
}


//Budget Calculator

function budgetCalculator(ghori, phone, laptop) {
    if (ghori < 0 || phone < 0 || laptop < 0) {
        return "ERROR";
    }
    else {
        var budget = ghori*50 + phone*100 + laptop*500;
        return budget;
    }
}


//Hotel Cost

function hotelCost(days) {
    if (days < 0) {
        return "ERROR";
    }
    else if (days <= 10) {
        var firstCost = days*100;
        return firstCost;
    }
    else if (days <= 20) {
        var diff = days - 10;
        var secondCost = 10*100 + diff*80;
        return secondCost;
    }
    else {
        var diff2 = days - 20;
        var thirdCost = 10*100 + 10*80 + diff2*50;
        return thirdCost;
    }
}


//MegaFriend

function megaFriend(array) {
    var m = 0;
    if (array.length == 0) {
        return "ERROR";
    }
    else {
        for (let i = 0; i < array.length; i++) {
            var length = array[i].length;
            if (length == 0 || array[i] == ' ') {
                return "ERROR";
            }
            else if (length > m) {
                m = length;
                var mega = array[i];
            }
        }
    }
    return mega;
}