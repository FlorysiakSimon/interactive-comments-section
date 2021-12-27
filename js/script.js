//LOAD DATA
const loadData = async () => {
    try {
        const res = await fetch('../data.json');
        data = await res.json();
        const comments = data.comments
        displayComments(comments)
        console.log(comments)
    } catch (err) {
        console.error(err);
    }
  };

loadData();

const displayComments = (comments) => {
    const htmlString = comments
    .map((comments) => {
        return `
        <div class="container">
            <div class="container-header">
                <img src='${comments.user.image.png}' alt="user image" />
                <div class="container-header-user">${comments.user.username}</div>
                <div class="container-header-date">${comments.createdAt}</div>
            </div>
            
            <p>${comments.content}</p>
        </div>`;
    })
    .join('');
        document.querySelector('#comments').innerHTML = htmlString;
}
