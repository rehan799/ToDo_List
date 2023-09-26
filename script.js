let searchBar = document.querySelector('#searchBar');
let add = document.querySelector('#add');
// let List = document.querySelector('.list');
let plus = document.querySelector('#plus');
let cancel = document.querySelector('#cancel');
let container = document.querySelector('.container')
// let head = document.querySelector('h3')

let ans = searchBar.value;

searchBar.addEventListener('keyup',(e)=>{
  const val = e.currentTarget.value;
  
  if(val != "" && val.length<30){
    add.disabled = false;
  }
  else{
    add.disabled = true;
  }

  
})

// function call on add button


add.addEventListener('click',function(){
    console.log('clicked')
  
    add.disabled = true;

    let createList = document.createElement('div');
    container.appendChild(createList);
    createList.classList.add('list');
    
    let createbox1 = document.createElement('div');
    createList.appendChild(createbox1);
    createbox1.classList.add('box1');
    
    let createi = document.createElement('i');
    createbox1.appendChild(createi);
    createi.classList.add('fa-solid');
    createi.classList.add('fa-feather');
    createi.classList.add('fa-fade');
    createi.classList.add('fa-lg');
    
    
    let createh3 = document.createElement('h3');
    createbox1.appendChild(createh3);
    createh3.innerText = searchBar.value
    
    
    let createbox = document.createElement('div');
    createList.appendChild(createbox);
    createbox.classList.add('box');
    
    // let createi1 = document.createElement('i');
    // createbox.appendChild(createi1);
    // createi1.classList.add('fa');
    // createi1.classList.add('fa-plus-square-o');
    // createi1.id='plus';
   
    // let createi2 = document.createElement('i');
    // createbox.appendChild(createi2);
    // createi2.classList.add('fa');
    // createi2.classList.add('fa-window-close');
    // createi2.id='cancel'

    let createi2 = document.createElement('button');
    createbox.appendChild(createi2);
    
    createi2.classList.add('btn');
    createi2.innerText='delete'
    
    // createi2.id='cancel'

    
    searchBar.value='';
      
   createi2.addEventListener('click',function(){
     console.log('del')
     container.removeChild(createList)
    
    })
    
})
