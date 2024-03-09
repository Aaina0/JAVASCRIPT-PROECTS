function generate() {
  var quotes = {
    "― Charlotte Brontë, Jane Eyre":
      "“I am no bird; and no net ensnares me: I am a free human being with an independent will.”",
    "― Ralph Ellison, Invisible Man":
      "“When I discover who I am, I’ll be free.”",
    "― Toni Morrison, Song of Solomon":
      "“You wanna fly, you got to give up the shit that weighs you down.”",
    "― Søren Kierkegaard , The Concept of Anxiety: A Simple Psychologically Orienting Deliberation on the Dogmatic Issue of Hereditary Sin":
      "“Anxiety is the dizziness of freedom.”",
    "― C. JoyBell C":
      "“Life is too short to waste any amount of time on wondering what other people think about you. In the first place, if they had better things going on in their lives, they wouldn't have the time to sit around and talk about you. What's important to me is not others' opinions of me, but what's important to me is my opinion of myself.”",
  };
  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
