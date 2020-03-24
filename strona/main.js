$(document).ready(function() {
  
  let napis = "Twój unikalny kod";
  let teraz = new Date();
  let kod = teraz.getTime() % 1000000;
  
  let do_wyswietlenia = napis + ": #" + kod;

  $(".pole_kodu__text").text(do_wyswietlenia);

  let powiadomienie = {
    imie_nazwisko: false,
    email: false,
    telefon: false,
    ulica: false,
    miasto: false,
    kod_pocztowy: false,
    zgoda_rodo: false
  };

  $(".wspieram_button").click(function() {
    let imie_nazwisko = $(".imie_nazwisko").val();
  
    let email = $(".email").val();
    
    let telefon = $(".telefon").val();
    
    let ulica = $(".ulica").val();
    
    let miasto = $(".miasto").val();

    let kod_pocztowy = $(".kod_pocztowy").val();

    let zgoda_rodo = $('.zgoda_rodo').is(":checked")
    console.log(zgoda_rodo);

    if(!imie_nazwisko) {
      console.log("imie i nazwisko nie zostaly okreslone");
      if(!powiadomienie.imie_nazwisko) {
        let span = document.createElement("span");
        span.className = "imie_nazwisko__span_blad span_blad";
        span.textContent = "Imie i nazwisko nie zostały określone!";
        $(".imie_nazwisko").before(span);
        powiadomienie.imie_nazwisko = true;
      }
    } else {
      if(powiadomienie.imie_nazwisko) {      
        $(".imie_nazwisko__span_blad").remove();
        powiadomienie.imie_nazwisko = false;
      }
    }
    
    if(!email) {
      console.log("email nie zostal okreslony");
      if(!powiadomienie.email) {
        let span = document.createElement("span");
        span.className = "email__span_blad span_blad";
        span.textContent = "Email nie został określony!";
        $(".email").before(span);
        powiadomienie.email = true;
      }
    } else {
      if(powiadomienie.email) {
        $(".email__span_blad").remove();
        powiadomienie.email = false;
      }
    }
    
    if(!telefon) {
      console.log("telefon nie zostal okreslony");
      if(!powiadomienie.telefon) {
        let span = document.createElement("span");
        span.className = "telefon__span_blad span_blad";
        span.textContent = "Telefon nie został określony!";
        $(".telefon").before(span);
        powiadomienie.telefon = true;
      }
    } else {
      if(powiadomienie.telefon) {       
        $(".telefon__span_blad").remove();
        powiadomienie.telefon = false;
      }
    }
    
    if(!ulica) {
      console.log("ulica nie zostala okreslona");
      if(!powiadomienie.ulica) {
        let span = document.createElement("span");
        span.className = "ulica__span_blad span_blad";
        span.textContent = "Ulica nie została określona!";
        $(".ulica").before(span);
        powiadomienie.ulica = true;
      }
    } else {
      if(powiadomienie.ulica) {
        $(".ulica__span_blad").remove();
        powiadomienie.ulica = false;
      }
    }
    
    if(!miasto) {
      console.log("miasto nie zostalo okreslone");
      if(!powiadomienie.miasto) {
        let span = document.createElement("span");
        span.className = "miasto__span_blad span_blad";
        span.textContent = "Miasto nie zostało określone!";
        $(".miasto").before(span);
        powiadomienie.miasto = true;
      }
    } else {
      if(powiadomienie.miasto) {
        $(".miasto__span_blad").remove();
        powiadomienie.miasto = false;
      }
    }
    
    if(!kod_pocztowy) {
      console.log("kod pocztowy nie zostal okreslony");
      if(!powiadomienie.kod_pocztowy) {
        let span = document.createElement("span");
        span.className = "kod_pocztowy__span_blad span_blad";
        span.textContent = "Kod pocztowy nie został określony!";
        $(".kod_pocztowy").before(span);
        powiadomienie.kod_pocztowy = true;
      }
    } else {
      if(powiadomienie.kod_pocztowy) {
        $(".kod_pocztowy__span_blad").remove();
        powiadomienie.kod_pocztowy = false;
      }
    }

    if(!zgoda_rodo) {
      console.log("zgoda rodo nie zostala wydana");
      if(!powiadomienie.zgoda_rodo) {
        $(".checkmark").addClass("checkmark--notclicked");
        powiadomienie.zgoda_rodo = true;
      }
    } else {
      if(powiadomienie.zgoda_rodo) {
        $(".checkmark").removeClass("checkmark--notclicked");
        powiadomienie.zgoda_rodo = false;
      }
    }
  });

  const stateOfButtons = {
    first: true,
    second: false,
    third: false,
  };

  stateOfButtons.reset = function() {
    this.first = false;
    this.second = false;
    this.third = false;
  }

  function switchToButton() {
    $(".pledge_button_1").addClass("pledge_button--nieaktywny");
    $(".pledge_button_2").addClass("pledge_button--nieaktywny");
    $(".pledge_button_3").addClass("pledge_button--nieaktywny");
    
    $(".pledge_button_1").removeClass("pledge_button--aktywny");
    $(".pledge_button_2").removeClass("pledge_button--aktywny");
    $(".pledge_button_3").removeClass("pledge_button--aktywny");

    if(stateOfButtons.first) {
      $(".pledge_button_1").addClass("pledge_button--aktywny");
      $(".pledge_button_1").removeClass("pledge_button--nieaktywny");
    } else if(stateOfButtons.second) {
      $(".pledge_button_2").addClass("pledge_button--aktywny");
      $(".pledge_button_2").removeClass("pledge_button--nieaktywny");
    } else if(stateOfButtons.third) {
      $(".pledge_button_3").addClass("pledge_button--aktywny");
      $(".pledge_button_3").removeClass("pledge_button--nieaktywny");
    }
  }

  $(".pledge_button_1").click(function() {
    stateOfButtons.reset();
    stateOfButtons.first = true;
    switchToButton();
    console.log("Button nr 1 has been clicked");
  });

  $(".pledge_button_2").click(function() {
    stateOfButtons.reset();
    stateOfButtons.second = true;
    switchToButton();
    console.log("Button nr 2 has been clicked");
  });

  $(".pledge_button_3").click(function() {
    stateOfButtons.reset();
    stateOfButtons.third = true;
    switchToButton();
    console.log("Button nr 3 has been clicked");
  });

});

