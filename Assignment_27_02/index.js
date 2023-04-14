
const student = {
    firstName: "Mohammad",
    lastName: "Moin",
    age: 22,
    skills: ["JavaScript", "HTML", "CSS","java","SQL"],
    country: "INDIA",
    enrolled: true
  };
  
  
  localStorage.setItem("student", JSON.stringify(student));
  