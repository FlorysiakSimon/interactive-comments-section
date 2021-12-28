//LOAD DATA
const loadData = async () => {
    try {
        const res = await fetch('../data.json');
        data = await res.json();
        displayComments(data)
        writeComments(data)
    } catch (err) {
        console.error(err);
    }
  };

loadData();

const displayComments = (data) => {
    const comments = data.comments
    const htmlString = comments
    .map((comments) => {
        return `
        <div class="container">
            <div class="wrapper">
                <div class="score">
                    <span id="score-plus">+</span>
                    <span id="score-total">${comments.score}</span>
                    <span id="score-minus">-</span>
                </div>
                <div class="container-header">
                    <img src='${comments.user.image.png}' alt="user image" />
                    <div class="container-header-user">${comments.user.username}</div>
                    <div class="container-header-date">${comments.createdAt}</div>
                </div>
                <p>${comments.content}</p>
                <div class="container-icons">
                    <img class="delete-icon" src="../images/icon-delete.svg" alt="delete-icon"><span id="delete">Delete</span></img>
                    <img class="reply-icon" src="../images/icon-reply.svg" alt="delete-icon"><span id="reply">Reply</span></img>
                </div>
            </div>

            ${comments.replies.map(comments => `
            <div class="container-reply">
                <div class="score">
                    <span id="score-plus">+</span>
                    <span id="score-total">${comments.score}</span>
                    <span id="score-minus">-</span>
                </div>
                <div class="container-header">
                    <img src='${comments.user.image.png}' alt="user image" />
                    <div class="container-header-user">${comments.user.username}</div>
                    <div class="container-header-date">${comments.createdAt}</div>
                </div>
                <p>${comments.content}</p>
                <div class="container-icons">
                    <img class="delete-icon" src="../images/icon-delete.svg" alt="delete-icon"><span id="delete">Delete</span></img>
                    <img class="reply-icon" src="../images/icon-reply.svg" alt="delete-icon"><span id="reply">Reply</span></img>
                </div>
            </div>
            `
            ).join('')
            }

            </div>
            
        </div>`;
    })
    .join('');
    document.querySelector('#comments').innerHTML = htmlString;
}


const writeComments = (data) =>{
    document.querySelector('#write').innerHTML = `
    <div class="container-user">
     <img class="container-current-user" src='${data.currentUser.image.png}' alt="user image" />
     <textarea id="new-comment-input" placeholder="Add a comment..."></textarea>
     <button type="button" id="new-comment">send</button>
    </div>`

    document.querySelector('#new-comment').addEventListener("click", (e) =>{
        console.log(data)
        const commentValue = document.querySelector('#new-comment-input').value;
        data.comments.push({
            id: 3,
            content: commentValue,
            createdAt: "Today",
            replies: [],
            score: 1,
            user: {
                image: { png: data.currentUser.image.png},
                username:data.currentUser.username
            }
        })
        console.log(commentValue)
        displayComments(data)

    })
}

