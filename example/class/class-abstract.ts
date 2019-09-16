abstract class Department {
  name: string

  constructor(name: string) {
    this.name = name
  }

  printName(): void {
    console.log('department name' + this.name)
  }

  abstract printMeeting(): void
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting ad auditing')
  }

  printMeeting(): void {
    console.log('The accounting department')
  }

  genterateReports(): void {
    console.log('Generating accounting reports...')
  }
}

// let department: Department
// department = new AccountingDepartment() 
// department.printName()
// department.genterateReports()

let department: AccountingDepartment
department = new AccountingDepartment() 
department.printName()
department.genterateReports()