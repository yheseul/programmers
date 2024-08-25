function solution(id_pw, db) {
  if((db.join(' ').split(' ')).includes(id_pw.join(','))) return "login"
  else{
    return (db.join(',').split(',')).includes(id_pw[0]) ? "wrong pw" : "fail"
  }
}