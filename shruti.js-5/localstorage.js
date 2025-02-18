let title = document.querySelector("#booktitle");
let price = document.querySelector("#bookprice");
let category = document.querySelector("#bookcategory");
let Author = document.querySelector("#bookAuthor");

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();

    let olddata = JSON.parse(localStorage.getItem('books')) || []
    let newbook ={
        title: title.value,
        price: price.value,
        category: category.value,
        Author: Author.value
    };
    olddata.push(newbook);
    localStorage.setItem('books',JSON.stringify(olddata));
});

loadData()

function loadData(){
    let  books = JSON.parse(localStorage.getItem('books'))
    let result ="";
    books.foreach((book,index)=>{
        row = `<tr>
        <td>${index +1}</td>
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td>${book.category}</td>
        <td>${book.Author}</td>`
    })
}
