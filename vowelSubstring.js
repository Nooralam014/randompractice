// function findVowelSubsets(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let subsets = [];
//     function helper(str, index, subset) {
//     if (subset.length === vowels.length) {
//     subsets.push(subset);
//     return;
//     }
//     if (index >= str.length) {
//     return;
//     }
//     if (str[index] === vowels[subset.length]) {
//     helper(str, index + 1, subset + str[index]);
//     }
//     helper(str, index + 1, subset);
//     }
//     helper(str, 0, '');
//     return subsets;
//     }
    
//     console.log(findVowelSubsets('aaeioux'));

function findVowelSubsets(str) {
    let subsets = [];
    let vowels = 'aeiou';
  
    function helper(index, currentSubset) {
      if (currentSubset.length > 0 && currentSubset === vowels) {
        subsets.push(currentSubset + str.slice(index));
      }
      if (index >= str.length) {
        return;
      }
      helper(index + 1, currentSubset + str[index]);
      helper(index + 1, currentSubset);
    }
  
    helper(0, '');
    return subsets;
  }
  
  console.log(findVowelSubsets('aeiousx'));
  