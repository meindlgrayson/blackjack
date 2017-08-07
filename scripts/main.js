/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

function handValue(hand) {

  var total = 0;
  var aces = 0;

  for (var i = 0; i < hand.length; i++) {
    if (hand[i] == 'A') {
      aces += 1;
    } else if (hand[i] == 'Q' || hand[i] == 'J' || hand[i] == 'K') {
      total += 10;
    } else {
      var number = Number(hand[i]);
      total += number;
    }
  }
  var aceTotal = total;
  for (i = 0; i < aces; i++) {
    if (aceTotal <= 10) {
      aceTotal += 11;
    } else {
      aceTotal += 1;
    }
  }
  console.log("before-ace-total: " + total);
  console.log("ace-total: " + aceTotal);
  return aceTotal;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/