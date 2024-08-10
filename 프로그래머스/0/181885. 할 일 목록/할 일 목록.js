function solution(todo_list, finished) {
  let todo = []
  let result = []
  finished.map((x, i) => !x ? todo.push(i) : todo)
  todo.filter(x => result.push(todo_list[x]))
  return result
}