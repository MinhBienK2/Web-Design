function user(title,body,author,views,comments,isLive){
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = views,
    this.comments = comments,
    this.isLive = isLive
}

const post = new user(
    'ahihi',
    'anh Hoang dzzz',
    'abc',
    100,
    [
        {author: 'anh Huân đzzz', body: "lewlew"},
        {author: 'anh Huân đzzz', body: "lewlew"},
    ],
    'True'
)

console.log(post)


