let students = [
    { name: 'vijay', marks: 80 },
    { name: 'stephen', marks: 90 },
    { name: 'hemanth', marks: 50 },
    { name: 'linga', marks: 30 }
  ];
  
  let pass = students.filter(student => student.marks >= 35);
  console.log(pass);
