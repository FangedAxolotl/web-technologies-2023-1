const id = new URLSearchParams(window.location.search).get('id');

const loadDetails = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

const renderDetails = async () => {
    const details = await loadDetails();
    const descriptionContainer = document.getElementById('description');
    console.log(`<h1>Title:</h1>
                        <p class="description__title">${details.title}</p>
                        <h1>Body:</h1>
                        <p class="description__body">${details.body}</p>`)
    descriptionContainer.innerHTML = `<h1>Title:</h1>
                        <p class="description__title">${details.title}</p>
                        <h1>Body:</h1>
                        <p class="description__body">${details.body}</p>`
}

const loadComments = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return await res.json();
}

const renderComments = async() => {
    const comments = await loadComments();
    const commentsContainer = document.getElementById('comments');
    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
        commentsContainer.innerHTML += createComment(comment);
    });

}

const createComment = (comment) => {
    return `<div class='comments__item'>
                <span class='comments__key'>Name: </span><span class='comments__value'>${comment.name}</span>
                <span class='comments__key'>Email: </span><span class='comments__value'>${comment.email}</span>
                <span class='comments__key'>Body: </span><span class='comments__value'>${comment.body}</span>
            </div>`
}

const init = async () => {
    await Promise.all([renderComments(), renderDetails()])
}

if(id === null) {
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = `ERROR, ID не укаазно`
}else if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
}