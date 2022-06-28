// form and options 
const optionUrl = document.getElementsByName('searchurl');
const btnSubmit = document.querySelector('#btnSubmitUrl');

// area response
const areaResponse = document.querySelector('#response-text-request'); 
const hide = document.querySelector('.hide'); 

// bank data 
let bankData = []; 


// Aplication
btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    
    areaResponse.innerHTML = ''
    hide.style.display = 'block'; 

    const url = document.querySelector('input[name="searchurl"]:checked').value;
    
    async function getDataUrl() {
        const response = await fetch(url, {
            method: 'GET'
        }); 

        const responseDataUrl = await response.json(); 

        //renderizando

        if (optionUrl[0].checked) { 
            responseDataUrl.map(user => {

                const div = document.createElement('div'); 
                div.setAttribute('class', 'area-body'); 
                const body = document.createElement('p'); 

                body.innerHTML = ` 
                    Name: ${user.name} </br>
                    Id: ${user.id} </br>
                    Username: ${user.username} </br>
                    Email:${user.email} </br>
                `; 


                div.appendChild(body); 
                areaResponse.appendChild(div); 
            })  
        } 
        else if (optionUrl[1].checked) {
            responseDataUrl.map(photos => {

                const div = document.createElement('div'); 
                div.setAttribute('class', 'area-body'); 
                const body = document.createElement('p'); 

                body.innerHTML = ` 
                    Title: ${photos.titile} <br>
                    Id: ${photos.id} </br>
                    Url: ${photos.url} </br>
                `; 

                div.appendChild(body); 
                areaResponse.appendChild(div); 
            }); 

        } else if (optionUrl[2].checked) {
            responseDataUrl.map(posts => {

                const div = document.createElement('div'); 
                div.setAttribute('class', 'area-body'); 
                const body = document.createElement('p'); 

                body.innerHTML = ` 
                    Title: ${posts.titile} <br>
                    Id: ${posts.id} </br>
                    Parágrafo: ${posts.body} </br>
                `; 

                div.appendChild(body); 
                areaResponse.appendChild(div); 
            })
        } else if (optionUrl[3].checked) {
            responseDataUrl.map(album => {

                const div = document.createElement('div'); 
                div.setAttribute('class', 'area-body'); 
                const body = document.createElement('p'); 

                body.innerHTML = ` 
                    Id: ${album.id} </br>
                    Title: ${album.title} <br>
                `; 

                div.appendChild(body); 
                areaResponse.appendChild(div); 
            })

        } else if (optionUrl[4].checked) {
            responseDataUrl.map(all => {

                const div = document.createElement('div'); 
                div.setAttribute('class', 'area-body'); 
                const body = document.createElement('p'); 

                body.innerHTML = ` 
                    Id: ${all.id} </br>
                    Title: ${all.title} <br>
                    Completo: ${all.completed}
                `; 

                div.appendChild(body); 
                areaResponse.appendChild(div); 
            })
        }
    }

    console.log(url);

    getDataUrl(); 
});

/*
    
    else if (optionUrl[2].checked) {} 
    else if (optionUrl[3].checked) {}
    else if (optionUrl[4].checked) {}

*/