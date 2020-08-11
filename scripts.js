let names = ["Levi", "Liza", "<b>Lotti</b>"]
names.forEach(element => {
    $('ul').append('<li>' + element + '</li>')
});

// $('li:contains("Lotti")').attr('class', 'black');

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $('body').append('<h1>' + additionalBlock['title'] + '</h1>', '<p>' + additionalBlock['text'] + '</p>')

