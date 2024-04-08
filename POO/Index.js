class Cuestionario {
    constructor(pregunta,si,no) {
      this.pregunta = pregunta;
      this.si = si; 
      this.no = no;
    
      function ask() {
        let pregunta = document.getElementeById("Pregunta")
        
      }
  console.log(ask)
    function sayYes(si) {
        const si = document.onclick(si);
        alert ("Has elegido si")
    
    
    
    
    }
    function sayNo(no) {
        const no = document.onclick(no)
        alert ("Has elegido no")
    }
  }
  }