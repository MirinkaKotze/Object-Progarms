// LESSON 29 - OBJECTS
// ALL HOMEWORK WRAPPER
function wrapper() {
  userInput = prompt(
    "Choose the number that is corresponding to the code you want to run: \n1. Describing car object info. \n2. Car Time Frame. \n3. Adding Fraction Objects. \n4. Substracting Fraction Objects.  \n5. Multiplying Fraction Objects. \n6. Deviding Fraction Objects. \n7. Simplifying a Fraction Object. \n8. Display Time. \n9. Changing the Seconds. \n10. Changing the Minutes. \n11. Changing the Hours"
  );
  if (userInput === 1) {
    car.carInfo();
  } else if (userInput === 2) {
    car.timeFrame(1023);
  } else if (userInput === 3) {
    addingFractions(fraction1, fraction2);
  } else if (userInput === 4) {
    substractingFractions(fraction1, fraction2);
  } else if (userInput === 5) {
    multiplyingFractions(fraction1, fraction2);
  } else if (userInput === 6) {
    devidingFractions(fraction1, fraction2);
  } else if (userInput === 7) {
    simplifying(fraction1);
  } else if (userInput === 8) {
    time.displayTime();
  } else if (userInput === 9) {
    time.changeSeconds(30);
  } else if (userInput === 10) {
    time.changeMinutes(30);
  } else if (userInput === 11) {
    time.changeHours(3);
  }
}
wrapper();

//INDIVIDUAL HOMEWORK
// 1. Create an object that describes a car (manufacturer, model, year of release, average speed)
// and the following methods for working with this object:
//  A method that displays the car info
//  A method for counting a time frame necessary to cover a given distance with the average speed.
//Note that every 4 hours the driver has to take a 1-hour break.

const car = {
  manufacturer: "Toyota",
  model: "Hilux",
  yearRelease: "2021",
  averageSpeed: 100,
  carInfo: function () {
    console.log(
      `This car is manufactured by: ${this.manufacturer}, model: ${this.model}, year of Release &{this.yearRelease} and it's average speed is: ${this.averageSpeed}`
    );
  },
  timeFrame: function (distanceKM) {
    const time = distanceKM / this.averageSpeed;
    const totalSeconds = time * 3600;
    let hours = Math.floor(totalSeconds / 3600);
    const minuteSecondsLeft = totalSeconds % 3600;
    const minutes = Math.floor(minuteSecondsLeft / 60);
    const seconds = minuteSecondsLeft % 60;
    let rest = 4;
    let hoursWithRest = "";
    while (hours >= rest) {
      hoursWithRest = hours + 1;
      rest = rest + 4;
    }
    hours = hoursWithRest;
    console.log(
      `The time to travel ${distanceKM}km is ${hours} hours, ${minutes} minutes and ${seconds} seconds.`
    );
  },
};
// car.carInfo()
// car.timeFrame(1023)

// 2. Create an object that contains separately the numerator and the denominator of a fraction,
// and the following functions for working with this object:
//  A function for adding two fraction objects.
//  A function for subtracting two fraction objects.
//  A function for multiplying two fraction objects.
//  A function for dividing two fraction objects.
//  A function for simplifying a fraction object.

const fraction1 = {
  numerator: 4,
  denominator: 12,
};

const fraction2 = {
  numerator: 2,
  denominator: 6,
};

function addingFractions(x, y) {
  const i = x.numerator + y.denominator;
  const j = x.denominator + y.numerator;
  const numeratorResult = i + j;
  const denominatorResult = y.denominator * x.denominator;
  console.log(
    `The new fraction have a numerator of: ${numeratorResult} and a denominator of: ${denominatorResult}`
  );
}
// addingFractions(fraction1, fraction2)

function substractingFractions(x, y) {
  const i = x.numerator * y.denominator;
  const j = x.denominator * y.numerator;
  let numeratorResult = "";
  if (i > j) {
    numeratorResult = i - j;
  }
  if (i < j) {
    numeratorResult = j - i;
  } else {
    numeratorResult = j;
  }
  const denominatorResult = y.denominator * x.denominator;
  console.log(
    `The new fraction have a numerator of: ${numeratorResult} and a denominator of: ${denominatorResult}`
  );
}
// substractingFractions(fraction1, fraction2)

function multiplyingFractions(x, y) {
  const numeratorResult = x.numerator * y.numerator;
  const denominatorResult = x.denominator * y.denominator;
  console.log(
    `The new fraction have a numerator of: ${numeratorResult} and a denominator of: ${denominatorResult}`
  );
}
// multiplyingFractions(fraction1, fraction2)

function devidingFractions(x, y) {
  const newYdenominator = y.numerator;
  const newYnumerator = y.denominator;
  const numeratorResult = x.numerator * newYnumerator;
  const denominatorResult = x.denominator * newYdenominator;
  console.log(
    `The new fraction have a numerator of: ${numeratorResult} and a denominator of: ${denominatorResult}`
  );
}
// devidingFractions(fraction1, fraction2)

//NB!! check use of const and let ==> always start with const, if the value in the variable is going to change -- change const to let

function simplifying(x) {
  const numerator = x.numerator;
  let denominator = x.denominator;
  while (denominator > 0) {
    let i = denominator;
    denominator = numerator % denominator;
    commonDivisor = i;
  }
  const newNumerator = x.numerator / commonDivisor;
  const newDenominator = x.denominator / commonDivisor;
  console.log(
    `The symplified fraction have a numerator of: ${newNumerator} and a denominator of: ${newDenominator}`
  );
}
// simplifying(fraction1)

// 3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object:
//  A method for displaying the time.
//  A method for changing the time by a given amount of seconds.
//  A method for changing the time by a given amount of minutes.
//  A method for changing the time by a given amount of hours.
// Note that in the last three methods changing one part may influence another.
// For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».

//[[ASSUMING: THE CHANGE IN SECONDS/MINUTES/HOURS SHOULD NOT CHANGE THE TIME IN THE OBJECT. -->
//              IF THEY SHOULD CHANGE THE TIME IN THE OBJECT SO THAT EVERY CHANGE EFFECTS THE NEXT.
//                I NEED TO ADD this. TO THE NEW MINUTES, SECONDS AND HOURS AND THEN DISPLAY: this.hours, this.minutes, this.seconds INSIDE console.log]]
const time = {
  hours: 4,
  minutes: 40,
  seconds: 44,
  displayTime: function () {
    if (this.seconds < 10) {
      console.log(
        `The time is (hh:mm:ss): ${this.hours}:${this.minutes}:0${this.seconds}`
      );
    } else {
      console.log(
        `The time is (hh:mm:ss): ${this.hours}:${this.minutes}:${this.seconds}`
      );
    }
  },
  changeSeconds: function (secondsAdding) {
    let newSeconds = this.seconds + secondsAdding;
    let newMinutes = "";
    while (newSeconds >= 60) {
      newMinutes = this.minutes + 1;
      newSeconds = newSeconds - 60;
    }
    if (this.seconds < 10) {
      console.log(
        `The time after adding ${secondsAdding} seconds is (hh:mm:ss): ${this.hours}:${newMinutes}:0${newSeconds}`
      );
    } else {
      console.log(
        `The time after adding ${secondsAdding} seconds is (hh:mm:ss): ${this.hours}:${newMinutes}:${newSeconds}`
      );
    }
  },
  changeMinutes: function (minutesAdding) {
    let newMinutes = this.minutes + minutesAdding;
    let newHours = "";
    while (newMinutes >= 60) {
      newHours = this.hours + 1;
      newMinutes = newMinutes - 60;
    }
    if (this.seconds < 10) {
      console.log(
        `The time after adding ${minutesAdding} minutes is (hh:mm:ss): ${newHours}:${newMinutes}:0${this.seconds}`
      );
    } else {
      console.log(
        `The time after adding ${minutesAdding} minutes is (hh:mm:ss): ${newHours}:${newMinutes}:${this.seconds}`
      );
    }
  },
  changeHours: function (hoursAdding) {
    const newHours = this.hours + hoursAdding;
    if (this.seconds < 10) {
      console.log(
        `The time after adding ${hoursAdding} hours is (hh:mm:ss): &{newHours}:&{this.minutes}:0${this.seconds}`
      );
    } else {
      console.log(
        `The time after adding ${hoursAdding} hours is (hh:mm:ss): &{newHours}:&{this.minutes}:${this.seconds}`
      );
    }
  },
};
// time.displayTime()
// time.changeSeconds(30)
// time.changeMinutes(30)
// time.changeHours(3)
