import { addPost, deletePost, profileReducer } from './profile-reducer'; 

const state = {
    profile: {
        userId: 2,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            facebook: '',
            instagram: '',
            vk: '',
            mainLink: '',
            twitter: '',
            website: '',
            youtube: '',
        },
        photos: {
            small: '',
            large: ''
        }
    },
    posts: [
        { id: 1, likeCount: 15, message: "Hi, how are you?" },
        { id: 2, likeCount: 20, message: "It's my first post" }
    ],
    status: '',
}

test("new post should be added", () => {
    const newState = profileReducer(state, addPost("test message"))

    expect(state.posts.length).toBe(2)
    expect(state.posts[2]).toBe(undefined)
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[2]).toBeTruthy()
})

test("after deleting length of messages should be decrement", () => {
    const newState = profileReducer(state, deletePost(1))

    expect(state.posts.length).toBe(2)
    expect(state.posts[0].id).toBe(1)
    expect(newState.posts.length).toBe(1)
    expect(newState.posts[0].id).toBe(2)
})