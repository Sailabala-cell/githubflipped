const input = document.querySelector('.tags-input input');
const tagsContainer = document.querySelector('.tags-container');

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ',') {
    event.preventDefault();
    const tagValue = event.target.value.trim();
    if (tagValue) {
      const tag = document.createElement('div');
      tag.classList.add('tag');
      tag.innerHTML = `
        <span class="tag-name">${tagValue}</span>
        <span class="tag-remove">&#x2715;</span>
      `;
      tagsContainer.appendChild(tag);
      input.value = '';
    }
  }
});



tagsContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('tag-remove')) {
    event.target.parentElement.remove();
  }
});
// industry

const industryinput = document.querySelector('#industries-input input ');
const industrytagsContainer = document.querySelector(' #industries ');

industryinput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ',') {
    event.preventDefault();
    const industryValue = event.target.value.trim();
    if (industryValue ) {
      const industry = document.createElement('p');
      industry.classList.add('industry');
      industry.innerHTML = `
        <span class="industry-name">${industryValue }</span>
        <span class="industry-remove">&#x2715;</span>
      `;
      industrytagsContainer.appendChild(industry);
      industryinput.value = '';
    }
  }
});



industrytagsContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('industry-remove')) {
    event.target.parentElement.remove();
  }
});

// populate
const profiles = [  
  
{    id:"2",name: "Jane Doe",    skills: ["design", "ux", "figma", "photoshop"],     profession: "Graphic Designer",    rating: "90%"  },  
{    id:"3", name: "Bob Smith",    skills: ["design", "ux", "figma", "photoshop"],     profession: "Marketing Specialist",    rating: "85%"  },
{    id:"4",name: "Bob Smith",    skills: ["design", "ux", "figma", "photoshop"],     profession: "Marketing Specialist",    rating: "85%"  },
{    id:"5",name: "Bob Smith",    skills: ["design", "ux", "figma", "photoshop"],     profession: "Marketing Specialist",    rating: "85%"  },
{   id:"6",name: "Bob Smith",    skills: ["design", "ux", "figma", "photoshop"],     profession: "Marketing Specialist",    rating: "85%"  },
{   id:"7", name: "Bob Smith",    skills: ["design", "ux", "figma", "photoshop"],     profession: "Marketing Specialist",    rating: "85%"  },
{    id:"8",name: "Bob Smith",    skills: ["design", "ux", "figma", "photoshop"],     profession: "Marketing Specialist",    rating: "85%"  }];

const profilesContainer = document.getElementById("profiles");

profiles.forEach(profile => {
  const profileDiv = document.createElement("div");
  profileDiv.className = "col-12 mb-3";
  profileDiv.innerHTML = `
    <div class="p-3 border bg-light " style="border-top-right-radius: 30px; border-bottom-right-radius: 30px;">
      <div class="row align-items-center " style="font-size:12px;font-weight: 500;">
        <div class="col " style="cursor:pointer">
          <img id="${profile.id}" class="candidateImg" src="images/profileimg.jpg" class="img-fluid rounded">
        </div>
        <div class="col-3 " style="cursor:pointer" >
          <span >${profile.name}</span>
        </div>
        <div class="col-4" style="display:inline-block">
        <div class='row'>
          <span>${profile.skills.join(", ")}</span>
          </div>
        </div>
       
        <div class="col">
          <span>${profile.rating}</span>
        </div>
        <div class="col-3 d-flex align-items-center justify-content-between ">
          <div class="icon-box1">
            <i class="far fa-star-o" style="color:rgb(238, 99, 168)"></i>
          </div>
          <button class="btn buttonsave1 btn-light btn-primary btn-sm" style="font-size:12px;font-weight: 500;">Send Message</button>
        </div>
      </div> 
    </div>
  `;
  profilesContainer.appendChild(profileDiv);
});




// modal
// Get the candidate profile image element
document.querySelectorAll(".candidateImg").forEach(item => {
    item.addEventListener("click", event => {
        // Get the id of the clicked image
        const id = event.target.id;
        
        // Open the modal
        const modal = document.querySelector("#candidateModal");
        modal.classList.add("show");
        modal.style.display = "block";
    });
  });
  
  const modal = document.querySelector("#candidateModal");
  const closeButton = modal.querySelector(".close-button");
  
  // Add event listener to close button
  closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.style.display = "none";
  });
  
  


