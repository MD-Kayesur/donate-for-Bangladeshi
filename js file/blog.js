
// start js for header
// blog btn
// document.getElementById('button-1')
//     .addEventListener('click', function (event) {
//         event.preventDefault()
//         window.location.replace('blog.html')

//     })
// add & remove
function remove(id) {
    document.getElementById(id).classList.remove('hedden')
}
function add(id) {
    document.getElementById(id).classList.add('hedden')
}

//    add class

function color_remove(id) {
    document.getElementById(id).classList.remove('bg-lime-300')
}
function color_add(id) {
    document.getElementById(id).classList.add('bg-lime-300')
}
// donate and history btn

 add('button-2')
  remove('button-2')
// history btn
document.getElementById('button-3')
    .addEventListener('click', function (d) {
        d.preventDefault()
        color_add('button-3')
        color_remove('button-2')
        add('donate')
        remove('history')

    })

// donate btn
document.getElementById('button-2')
    .addEventListener('click', function (y) {
        y.preventDefault()
        color_remove('button-3')
        color_add('button-2')
        add('history')
        remove('donate')


    })






    