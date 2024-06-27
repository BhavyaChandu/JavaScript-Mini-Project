document.addEventListener('DOMContentLoaded',function(){
    const list =document.querySelector('#movie-list ul');
    const forms = document.forms;
//delete movie
    list.addEventListener('click',(e)=>{
        if(e.target.className == 'delete'){
            const li=e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });
    //adding movie
    const addform=forms['add-movie'];
    addform.addEventListener('submit',function(e){
        e.preventDefault();
    
    //creating elements

    const value=addform.querySelector('input[type="text"]').value;
    const li=document.createElement('li');
    const movieName=document.createElement('span');
    const deleteBtn=document.createElement('span'); 

    //add text content

    movieName.textContent=value;
    deleteBtn.textContent='delete';

    //add classes

        movieName.classList.add('name');
        deleteBtn.classList.add('delete');

    //append to DOM

        li.append(movieName);
        li.appendChild(deleteBtn)
        list.appendChild(li);
    });

})