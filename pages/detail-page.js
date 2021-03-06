function submitComment() {
    console.log("Hello!");

    const inputField = document.getElementById('name');
    console.log(inputField);

    const name = inputField.value;
    console.log(name);

    const textArea = document.getElementById('msg');
    const msg = textArea.value;
    console.log(msg);

    const comment = document.createElement('section');
    console.log(comment);

    const h3 = document.createElement('h3');
    console.log(h3);

    const p = document.createElement('p');
    console.log(p);

    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    console.log(comment);

    const commentSection = document.getElementById("comments");
    commentSection.appendChild(comment);
  
    inputField.value = null;
    textArea.value = null;

    if(doesNotPassAllValidations(name, msg)){
        return null
      };
  };

/*
  console.log(name);
  console.log(msg);
*/

function doesNotPassAllValidations(name, msg) {
    if (!name || !msg) {
      alert('You forgot to fill in your name or message!')
      return true;
    }
    if(msg.length > 280) {
      alert('Your comment is too long')
      return true;
    }
    return false;
  };