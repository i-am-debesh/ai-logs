const url = `https://ai-model-debesh.onrender.com/results`;

let containerElement = document.querySelector('.container');

function deleteItem(id=100) {
    console.log(id);
}





function renderList(data) {
    let list = [];
    for(let i=0; i<data.length; i++) {
        list.push(data[i]);
        
    }
    let dataListHtml = '';
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
                <button class="delete-btn" id="${currData._id}" onclick="requestDelete(this.id)">Delete</button>
            </div>
            
            
        </div>
        
        `
        dataListHtml += htmlElement;
    }
    containerElement.innerHTML = dataListHtml;
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

async function requestDelete(id) {
    const deleteUrl = `https://ai-model-debesh.onrender.com/delete`;
    //const deleteUrl = `http://localhost:3000/dltID?${id}`;
    let confirmation = prompt(`Enter password to Delete`);

    if(confirmation === "69") {
        try {
            const response = await fetch(deleteUrl);
            if(!response.ok) {
                throw new Error(`did'n get any response ${response.status}`);
            }
            const resp = await response.json();
            alert('Deleted successfully');
            console.log(resp);
            getData();
        }catch(error) {
            console.log(error);
        }
        
    }else{
        alert('wrong pass');
    }

    
    //console.log(`${id} will be deleted`);
    
    
}

setInterval(()=>{
    getData();
    
},3000)