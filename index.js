var noun1;
var noun2;
var noun3;

var verb1;
var verb2;
var verb3;

var adj1;
var adj2;
var adj3;

var adverb1;
var adverb2;
var adverb3;

var nameValue;
var nameValue2;

function gettingValues() {
  noun1 = $('#noun1').val();
    noun2 = $('input[name="noun2"]:checked').val();
    noun3 = $('#noun3').val();
    
    if (noun3 === "1") {
      noun3 = 'door';
    } else if (noun3 === "2") {
      noun3 = 'man';
    } else if (noun3 === "3") {
      noun3 = 'cat';
    } else {
      noun3 = 'a random noun';
    }
    
    verb1 = $('#verb1').val();
    verb2 = $('input[name="verb2"]:checked').val();
    verb3 = $('#verb3').val();
    
    if (verb3 === "1") {
      verb3 = 'jog';
    } else if (verb3 === "2") {
      verb3 = 'stand';
    } else if (verb3 === "3") {
      verb3 = 'ride';
    } else {
      verb3 = 'a random verb';
    }
    
    adj1 = $('#adj1').val();
    adj2 = $('input[name="adj2"]:checked').val();
    adj3 = $('#adj3').val();
    
    if (adj3 === "1") {
      adj3 = 'picky';
    } else if (adj3 === "2") {
      adj3 = 'ugly';
    } else if (adj3 === "3") {
      adj3 = 'classic';
    } else {
      adj3 = 'a random adjective';
    }
    
    adverb1 = $('#adverb1').val();
    adverb2 = $('input[name="adverb2"]:checked').val();
    adverb3 = $('#adverb3').val();
    
    if (adverb3 === "1") {
      adverb3 = 'lavishly';
    } else if (adverb3 === "2") {
      adverb3 = 'elaborately';
    } else if (adverb3 === "3") {
      adverb3 = 'judjmenatlly';
    } else {
      adverb3 = 'a random adverb';
    }
}


function myStory1() {
  $('#output').val('I am a ' + noun1 + " that lives in a " + noun2 + " and has a pet " + noun3 + ". I love to " + verb1 + " though my friend loves to " + verb2 + ". I love to " + verb3 + " when I " + verb1 + ". People call me " + adj1 + " and " + adj2 + " but I think of myself as " + adj3 + ". I do everything " + adverb1 + " and " + adverb2 + " though some think of me as a very " + adverb3 + " rounded " + noun1 + "! This is me, your " + noun1 + "!");
}

function myStory2() {
  $('#output').val('I am a ' + noun3 + " that lives in a " + noun1 + " and has a pet " + noun2 + ". I love to " + verb2 + " though my mother loves to " + verb1 + ". I love to " + verb3 + " when I " + verb2 + ". My family calls me " + adj3 + " and " + adj2 + " but I think of myself as " + adj1 + ". I do everything " + adverb2 + " and " + adverb3 + " though some think of me as a very " + adverb1 + " rounded " + noun3 + "! This is me, your " + noun3 + "!");
}

$(document).ready(function() {

  $('h1').addClass('animate__animated animate__heartBeat');
  $('h2').addClass('animate__animated animate__bounce');

  $('#cool').css('border', "2px solid green")
  $('#cool').css('border-radius', "5px")
  $('#cool').css('width', "150px")
  $('#cool').css('margin', "auto")
  $('#cool').css('display', "block")
  $('#cool').css('margin-top', "20px")

  $('#change-color').change(event => {
    // Target the body and changes its CSS background-color value
    var color = $('#change-color').val();
    
    $('body').css('background-color', color);
    
  });
  
  $('#change-color2').change(event => {
    var color2 = $('#change-color2').val();
    
    $('h1').css('color', color2);
    
  });

  $('#change-color3').change(event => {
    var color3 = $('#change-color3').val()

    $('fieldset').css('background-color', color3)

  });

  $('#change-color4').change(event => {
    var color4 = $('#change-color4').val();
    
    $('label').css('color', color4);
    
  });

  $('#resetStyle').click(event => {
    
    event.preventDefault();

    $('label').css('color', '#000000');
    $('fieldset').css('background-color', '#c4d162')
    $('body').css('background-color', '#a9a9a9');
    $('h1').css('color', '#ed7a28');

  });

  $('#generate').click(event => {
    
    event.preventDefault();
    
    gettingValues();
    myStory1();
    
  });
  
  $('#generate2').click(event => {
    
    event.preventDefault();
    
    gettingValues();
    myStory2();
    
  });
  
  $('#nameUpdate').click(event => {
    
    event.preventDefault();
    
    nameValue = $('#nameChange').val();
    nameValue2 = $('#nameChange2').val();

    var loginVar = nameValue + " " + nameValue2

    if (loginVar === "vk 2009") {
      $('#needNameInput').html(nameValue + " " + nameValue2 + "'s madlib form<br><span>Welcome, vk2009<br></span><span>Creator of the website<br></span><span>Member of the family</span><br><span>Youngest</span><br><span>Shortest</span>");
      $('h1').text(nameValue + " " + nameValue2 + "'s Madlib Generator Redux");
    } else if (loginVar === "ik 2006") {
      $('#needNameInput').html(nameValue + " " + nameValue2 + "'s madlib form<br><span>Welcome, ik2006<br><span>Member of the family</span><br><span>Oldest Child</span><br><span>Tallest</span>");
      $('h1').text(nameValue + " " + nameValue2 + "'s Madlib Generator Redux");
    } else if (loginVar === "vk 1977") {
      $('#needNameInput').html(nameValue + " " + nameValue2 + "'s madlib form<br><span>Welcome, vk1977<br><span>Member of the family</span><br><span>Younger Parent</span><br><span>Taller than vk 2009 and as1977.</span>");
      $('h1').text(nameValue + " " + nameValue2 + "'s Madlib Generator Redux");
    } else if (loginVar === "as 1977") {
      $('#needNameInput').html(nameValue + " " + nameValue2 + "'s madlib form<br><span>Welcome, as1977<br><span>Member of the family</span><br><span>Oldest</span><br><span>Taller than vk2009</span>");
      $('h1').text(nameValue + " " + nameValue2 + "'s Madlib Generator Redux");
    } else {
      $('h1').text(nameValue + " " + nameValue2 + "'s Madlib Generator Redux");
      $('#needNameInput').html(nameValue + " " + nameValue2 + "'s madlib form<br><span>Welcome " + loginVar + "</span>");
    }

   

  });
  
})