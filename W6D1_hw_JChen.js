//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// this function disregards upper and lowercase.
function findWords(dog_string, dog_names){
    for (let i = 0; i < dog_names.length; i++){
        let index = dog_string.search(dog_names[i]);
        if (index !== -1){
            console.log(`Matched ${dog_names[i]}`);
        } else{
            console.log(`No Matches on ${dog_names[i]}`);
        }
    }
}

//Call method here with parameters
findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0){
            arr.splice(i, 1, "even index");
        }
    }
    return arr
}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//============Codewars #1 ============//
/* You are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

function squareDigits(num){
    const split_str = num.toString().split('');
    let arr = [];
    for (let i=0; i<split_str.length; i++){
      let current_sqred = (Number(split_str[i])**2);
      arr[i] = current_sqred;
    }
    return Number(arr.join(''));
  }


//============Codewars #2 ============//
/* Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not... */
function friend(friends){
    friend_list = [];
    for (let i=0; i<friends.length; i++){
      if (friends[i].length === 4){
        friend_list.push(friends[i])
      }
    }
    return friend_list
  }
