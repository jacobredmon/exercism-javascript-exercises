export class Matrix {
  constructor(string) {
    this.rows = string.split("\n").map(num => num.split(" ")).map(toNum => toNum.map(Number));
    this.columns = Matrix.transpose(this.rows)
   }

   static transpose(rows) {
    return rows[0].map((i, j) => rows.map(row => row[j]));
  }

}
