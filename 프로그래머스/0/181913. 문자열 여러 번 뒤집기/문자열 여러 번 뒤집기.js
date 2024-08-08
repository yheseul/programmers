function solution(my_string, queries) {
  let strArray = my_string.split('');

  queries.forEach(([s, e]) => {
    let subArray = strArray.slice(s, e + 1).reverse();
    strArray.splice(s, e - s + 1, ...subArray);
  });

  return strArray.join('');
}