  $( function() {
    var availableTags = [
      "Mobile Phone Repair",
      "Sport Fields & Halls Contracting",
      "Audio Records Trading",
      "Sunglasses Trading",
      "Spectacles & Contact Lenses Trading",
      "Beauty & Personal Care Equipment Trading",
      "Parties & Entertainments Services",
      "Art Production Services",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );