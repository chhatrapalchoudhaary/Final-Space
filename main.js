const space_container = document.getElementById("space_container");
const limit = 47;

const getSpaceCharacters = async()=>{
    const url = `https://finalspaceapi.com/api/v0/character?limit=${limit}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    data.map((each)=>createLayout(each));

}


const createLayout=(each)=>{
    const {gender,name,origin,species,status,img_url,id,hair,abilities} = each;
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML=`
    <div>
        <div class="character">
            <img class="character-image" src=${img_url} alt=${name}/>
            <h1 class="character-title">${name}</h1>
            <div class="information">
                <div class="indiviual-info">
                    <small class="type">Gender</small>
                    <small class="data">${gender}</small>
                </div>
                <div class="indiviual-info">
                    <small class="type">Origin</small>
                    <small class="data">${origin}</small>
                </div>
                <div class="indiviual-info">
                    <small class="type">Species</small>
                    <small class="data">${species}</small>
                </div>
                <div class="indiviual-info">
                    <small class="type">Hair</small>
                    <small class="data">${hair}</small>
                </div>
                <div class="indiviual-info">
                    <small class="type">Status</small>
                    <small class="data">${status}</small>
                </div>
                
            </div>
        </div>
    </div>
    `
    space_container.appendChild(cardElement);
}

getSpaceCharacters();