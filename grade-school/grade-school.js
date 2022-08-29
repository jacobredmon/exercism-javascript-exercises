export class GradeSchool {
  #grades = {};

  /**
   * Return the school roster in the appropriate format.
   *
   * @returns [string] roster
   */
  roster() {
    return JSON.parse(JSON.stringify(this.#grades));
  }

  /**
   * Removes the inputed student from any grade (called prior to adding them to a new one).
   *
   * @param {string} student
   */
  removeFromGrades(student) {
    for (var [grade, students] of Object.entries(this.#grades)) {
      this.#grades[grade] = students.filter(name => name != student);
    }
  }

  /**
   * Adds students to the roster for a certain grade.
   *
   * @param {string} name
   * @param {number} grade
   */
  add(name, grade) {
    this.removeFromGrades(name);
    this.#grades[grade] = this.grade(grade).concat(name).sort();
  }

  /**
   * Gets roster for selected grade.
   *
   * @param {number} grade
   *
   * @returns
   */
  grade(grade) {
    return [...(this.#grades[grade]) || []];
  }
}
