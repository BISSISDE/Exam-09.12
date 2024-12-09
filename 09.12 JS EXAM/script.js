function IformationForSchool() {
  const school = {
    name: "NOName",
    phoneNumber: "77772221100",
    students: [
      { studentName: "Alya", top: "1", progress: 80, lessons: 6 },
      { studentName: "Diana", top: "1", progress: 60, lessons: 4 },
      { studentName: "Serik", top: "2", progress: 20, lessons: 5 },
      { studentName: "Dimash", top: "2", progress: 100, lessons: 7 },
      { studentName: "Fariza", top: "3", progress: 50, lessons: 6 },
      { studentName: "Aisha", top: "3", progress: 70, lessons: 7 },
    ],
};
  function changeSchoolName (){
    let newNameSchool = prompt("Enter new name")
    name = newNameSchool
    return alert(` Аты: ${newNameSchool}`);
  }
  function changePhoneNumber(){
    let newNumberSchool = +prompt("Enter new number")
    phoneNumber = newNumberSchool 
    return alert(`Номер: ${newNumberSchool}`)
  }
  function listStudentNames(){
    alert(school.students.map((student) => student.studentName))
  }
  function addStudent(){
    let studentName = prompt("Enter name")
    let top = prompt("Enter top")
    let progress = +prompt("Enter progress")
    let lessons = +prompt("Enter lessons")
    school.students.push({studentName , top , progress , lessons})
    alert("Kosyldy")
  }
  function applyDecreaseToTop(){
        let syray = prompt("Enter top that you wanna exchange progress");
        let prossent = +prompt("Enter % ");
        if (syray == school.students.top) {
            let sum = school.students.reduce((total, num) => total + num.progress, 0);
            let exchangeProgress = sun - (sum * prossent)/100
            alert(exchangeProgress)
        }else{
            alert("Топ табылмады")
        }
    
  }
    while (true) {
      let menu = +prompt(
        "1) Оқу орталығынын атауын өзгерту \n 2) Телефон нөмірін өзгерту \n 3) Студенттер атауын шығару \n 4) Жаңа студент қосу \n 5) Топқа пайыздық мөлшерде орташа үлгерімін төмендету \n 6) Тоқтат "
      );
      switch (menu) {
        case 1:
          changeSchoolName();
          break;
        case 2:
          changePhoneNumber();
          break;
        case 3:
          listStudentNames();
          break;
        case 4:
          addStudent();
          break;
        case 5:
          applyDecreaseToTop();
          break;
        case 6:
          alert("Сау болыңыз!");
          break;
        default:
          alert("Қате таңдау. Қайталап көріңіз.");
      }
      if (menu == 6)break
    }
}
IformationForSchool()
