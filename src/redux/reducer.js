import { EDIT_TITLE } from "./types";

const initialState = [
    {
        title: "Cup of Coffee Anyone?",
        location: "Hanoi, Vietnam",
        numberOfLikes: 11,
        image: "https://media.istockphoto.com/photos/close-up-of-steaming-cup-of-coffee-or-tea-on-vintage-table-early-on-picture-id1137365972?k=20&m=1137365972&s=612x612&w=0&h=_x7JXTfZoxVC9JCh5n2YqEzM7c5l171keV2qeOAcuYs="
    },
    {
        title: "48 Hours in Copenhagen",
        location: "Copenhagen, Denmark",
        numberOfLikes: 9,
        image: "https://images.unsplash.com/photo-1552560880-2482cef14240?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29wZW5oYWdlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
        title: "5 Hours in Paradise",
        location: "Lord Howe Island, Australia",
        numberOfLikes: 20,
        image: "https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Fshreyak-singh-NQOLyfk7B3I-unsplash-min.jpg?alt=media&token=d9cf4326-b95b-4b26-ad04-26ebf5975d1f"
    },
    {
        title: "Coffee Shop in Paradise Island",
        location: "Bali, Indonesia",
        numberOfLikes: 45,
        image: "https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Fchaitanya-shinde-mTyCp_D5vwk-unsplash-min.jpg?alt=media&token=1fb06e44-ef34-4815-b810-76361931afd4"
    },
    {
        title: "Maob, Utah",
        location: "Maob UT, United States",
        numberOfLikes: 11,
        image: "https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Fgayatri-malhotra-mlwXrYYAOms-unsplash-min.jpg?alt=media&token=88490795-6155-4e9c-a518-14584ae2de5c"
    },
    {
        title: "8 Cafes Sydney Startup Founders Love To Work From",
        location: "Sydney, New South Wales, Australia",
        numberOfLikes: 23,
        image: "https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Flai-yuching-WxePxgrIJbQ-unsplash-min.jpg?alt=media&token=c5b701a6-65b1-4f62-86dd-417f0b4be93f"
    },
    {
        title: "Breakfast in Vienna",
        location: "Vienna, Austria",
        numberOfLikes: 30,
        image: "https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Food%20Images%2Flior-shapira-GKxsKNTfZd8-unsplash-min.jpg?alt=media&token=c2f3f5a2-9609-42d1-acda-b38601c46a3a"
    },
    {
        title: "A Barista's Guide To Chicago's Coffee",
        location: "Chicago, United States",
        numberOfLikes: 15,
        image: "https://firebasestorage.googleapis.com/v0/b/dinenation-dev.appspot.com/o/Restaurant%2Frsz_restaurant-hd-wallpaper-download-restaurant-pictures-free-windows-wallpaper-widescreen-artworks-1920x1200-1.png?alt=media&token=f2cc78cd-536d-4a59-8c5d-e7b8c1aab73b"
    },
    {
        title: "8th Day Café, Kolkata",
        location: "Kolkata, India",
        numberOfLikes: 17,
        image: "https://images.unsplash.com/photo-1552560880-2482cef14240?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29wZW5oYWdlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
        title: "Sey Coffee, Brooklyn",
        location: "Brooklyn, NY",
        numberOfLikes: 26,
        image: "https://images.unsplash.com/photo-1552560880-2482cef14240?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29wZW5oYWdlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
];

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case EDIT_TITLE: 
            return{...state, title: action.payload}
        default:
            return state
    }
}

export default reducer;