document.querySelector("#btn").addEventListener("click", function () {
  const commentBox = document.querySelector("#new-comment");

  const commentContainer = document.querySelector("#comment-section");
  const p = document.createElement("p");
  p.innerText = commentBox.value;
  commentContainer.appendChild(p);

  commentBox.value = "";
});

// -------------------------------------------------------

document
  .querySelector("#new-comment")
  .addEventListener("keypress", function (e) {
    const commentBox = document.querySelector("#new-comment");
    const commentContainer = document.querySelector("#comment-section");
    if (e.key === "Enter") {
      const p = document.createElement("p");
      p.innerText = commentBox.value;
      commentContainer.appendChild(p);

      commentBox.value = "";
    }
  });

// // step-1: add event listener to the post button
// document
// .getElementById("new-comment")
// .addEventListener("keypress", function (e) {
// // step-2: get the comment inside the text area
// const commentBox = document.getElementById("new-comment");
// const newComment = commentBox.value;

// // step-3: set the comment inside the comment container
// // 1. get the comment conatiner
// // 2. create a new element (p tag)
// // 3. set the text of the comment as innerText of the p tag
// // 4. add the p tag using appendChild
