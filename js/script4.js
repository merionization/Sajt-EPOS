function validacija() {


    if (document.forms[0].mail.value=='') {
      alert("Niste uneli e-mail adresu!");
      document.forms[0].mail.focus();
      return "Posalji";
    }
    if(document.forms[0].mail.value.indexOf('@') == -1)
    {
      alert("Niste uneli e-mail adresu u odgovarajucem formatu!");
      document.forms[0].mail.focus();
      return "Posalji";
    }
    
    if (!proveriradio(document.forms[0].posetili)) { 
      alert('Niste selektovali');
      return "Posalji";
  }
  
  return confirm("Hvala sto ste ucestvovali u nasoj anketi,pozdrav! :)");
  }

  function proveriradio(dugmici) 
  {
    for(var i = 0; i < dugmici.length; i++) {
      if(dugmici[i].checked) return true;
    }
    return false;
  }
  var pomocna = false;

  function proveri(polje) {
    if (pomocna == false) {
      for (i = 0; i < polje.length; i++) {
        polje[i].checked = true;
      }
      pomocna = true;
      return "Obrisi sve cekirane"; 
    }
    else {
      for (i = 0; i < polje.length; i++) {
        polje[i].checked = false; 
      }
      pomocna = false;
      return "Oznaci sve"; 
    }
  } 