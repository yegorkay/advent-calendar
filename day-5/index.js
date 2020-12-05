const input = require("./input");

// Oh my god, I spent an embarassing amount of time on the math of this, and got frustrated. Then realzied it's binary...

const seatIDs = input.map((seat) => {
  return parseInt(seat.replace(/[FL]/g, "0").replace(/[BR]/g, "1"), 2);
});

console.log(Math.max(...seatIDs));

const mySeat =
  seatIDs
    .sort((seatA, seatB) => seatA - seatB)
    .find((seat, idx, arr) => arr[idx + 1] === seat + 2) + 1;

console.log(mySeat);
