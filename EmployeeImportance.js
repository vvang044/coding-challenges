//Employee Importance
/* You have data structure of employee information,
which includes the employee's unique id, their importance value,
and their direct subordinates's id

you are given an array of employees 'employees' where:
-employees[i].id is the ID of the ith employee.
-employees[i].importance is the importance values of the ith employee
-employees[i].subordinates is the list of the IDs of the subordinates of the ith employee

Given an integer 'id' that represents the ID of an employee, return 'the total
importance value of this employee and their subordinates'

Example 1:
                                ID = 1
                            Importsnce = 5

ID = 2                                                 ID = 3
Importance = 3                                      Importance = 3

Input: employees = [[1,5, [2,3]], [2,3,[]], [3,3,[]]], id= 1
Output: 11
Explanation: Employee 1 has importance value of 5, and he has two
direct subordinates: employee 2 and employee 3
They both have importance value 3
So the total importance value of employee 1 is 5 + 3 + 3 = 11

Example 2
                            ID = 1
                        Importance = 2

     ID = 5
Importance = -3

Input: employees = [[1,2, [5]], [5, -3, []]], id = 5
Output: -3

*/

/*
  Definition for Employee
  function Employee(id, importance, subordinates){
       this.id = id;
      this.importance = importance;
       this.subordinates = subordinates;
  }
*/

let GetImportance = function(employee, id){
    // let employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]];
    let sum = 0;

    for(let employee of employees){
        if(employee.id === id) {
            sum = sum + employee.importance
                if ( employee.subordinates.length > 0 ){
                    employee.subordinates.forEach( x => {
                        sum = sum + GetImportance(employees, x)
                    })
                }
        }
    }
    return sum;
}













  