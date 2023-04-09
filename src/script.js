const user = {
    id: 1,
    name: "Dzhanybek",
    surname: "Zakiriiaev",
    email: "dzhanybek.zakiriiyaev@gmail.com",
    pfp:"https://upload.wikimedia.org/wikipedia/en/9/96/Meme_Man_on_transparent_background.webp",
    isLoggedIn: false
};

const post = {
    id: 1,
    title: "My post",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LA_RXo5SsEGZvSHqtA9Y5JQStY6a0u37Iw&usqp=CAU",
    content: "It is my new post",
    userId: user.id,
    liked: false,
    comments: []
};

const comments = {
    id: 1,
    text: "Great post!",
    userId: user.id,
    postId: post.id
};
//все объекты связаны подобно базе данных(по параметру id)

const posts = [post];

function addPost(newPost) {
    posts.push(newPost);
}

function changeLogin() {
    user.isLoggedIn = !user.isLoggedIn;
}

function togglePostLike(postId) {
   for(let i = 0; i < posts.length; i++) {
       if (posts[i].id == postId) {
           posts[i].liked = !posts[i].liked;
       }
   }
}
