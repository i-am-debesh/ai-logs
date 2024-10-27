const url = `https://ai-model-debesh.onrender.com/results`;
let list = [];
let containerElement = document.querySelector('.container');

function deleteItem(id=100) {
    console.log(id);
}








function renderList(data) {

    for(let i=0; i<data.length; i++) {
        list.push(data[i]);
        
    }
    for(let i=0; i<list.length; i++) {
        const currData = list[i];
        const htmlElement = 
        `
        <div>
            <div class="d1">
                Ques: ${currData.content}<br>
                Time: ${currData.timestamp}
                
                <!-- Resp: ${currData.response} -->
                
            </div>

            <div>
                <button class="delete-btn" id="${i}" onclick="deleteItem(${1})">Delete</button>
            </div>
            
            
        </div>
        
        `
        containerElement.innerHTML += htmlElement;
    }
    
    
    
}
async function getData() {
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      renderList(json);
      //console.log(json.length);
    } catch (error) {
      console.error(error.message);
    }
}

getData();