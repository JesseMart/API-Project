// var lat = "29.7895214"
// var lon = "-95.5673086"
// fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`, {
//         headers: {
//             "user-key": "bf6c0110a83f00fcbdc7913c5bdc9dc0"
//         }
//     })
//     .then((response) => {
//         return response.json();
//     })
//     .then((res_array) => {
//         let arrayOfNearby = res_array.nearby_restaurants
//         let $listGroupContainer = $('.list-group');
//         let liTags = arrayOfNearby.map((e) => {
//             return `<li class='list-group-item list-group-item-action' id='${e.restaurant.id}'>${e.restaurant.name} <br> ${e.restaurant.location.address}</li>`
//         })
//         $listGroupContainer.html(liTags.join(''));
//     })
// let locArray = []
// $div = $(".list-group");
// $div.click((e) => {
//     let res_link = e.target
//     let restaurant_id = res_link.getAttribute('id')
//     fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurant_id}`, {
//             headers: {
//                 "user-key": "bf6c0110a83f00fcbdc7913c5bdc9dc0"
//             }
//         })
//         .then((response) => {
//             return response.json();
//         })
//         .then((restaurant_info) => {
//             // console.log(restaurant_info.location.latitude, restaurant_info.location.longitude)
//             let arrayOfPhotos = restaurant_info.photos
//             let $listGroupCont = $(`#${restaurant_id}`)
//             let imgTag = arrayOfPhotos.map((e) => {
//                 return `<img src=${e.photo.thumb_url}> `
//             })
//             $listGroupCont.html(imgTag.join(''))
//         })
// })