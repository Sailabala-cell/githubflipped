const input = document.querySelector(".tags-input input");
const tagsContainer = document.querySelector(".tags-container");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === ",") {
    event.preventDefault();
    const tagValue = event.target.value.trim();
    if (tagValue) {
      const tag = document.createElement("div");
      tag.classList.add("tag");
      tag.innerHTML = `
        <span class="tag-name">${tagValue}</span>
        <span class="tag-remove">&#x2715;</span>
      `;
      tagsContainer.appendChild(tag);
      input.value = "";
    }
  }
});

tagsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("tag-remove")) {
    event.target.parentElement.remove();
  }
});
// industry

const industryinput = document.querySelector("#industries-input input ");
const industrytagsContainer = document.querySelector(" #industries ");

industryinput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === ",") {
    event.preventDefault();
    const industryValue = event.target.value.trim();
    if (industryValue) {
      const industry = document.createElement("p");
      industry.classList.add("industry");
      industry.innerHTML = `
        <span class="industry-name">${industryValue}</span>
        <span class="industry-remove">&#x2715;</span>
      `;
      industrytagsContainer.appendChild(industry);
      industryinput.value = "";
    }
  }
});

industrytagsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("industry-remove")) {
    event.target.parentElement.remove();
  }
});

// populate
const profiles = [
  {
    id: "2",
    name: "Jane Doe",
    skills: ["design", "ux", "figma", "photoshop"],
    profession: "Graphic Designer",
    rating: "90%",
    profileimg:"/images/profile1.png"
  },
  {
    id: "3",
    name: "Bob Smith",
    skills: ["design", "ux", "figma", "photoshop"],
    profession: "Marketing Specialist",
    rating: "85%",
    profileimg:"/images/profile1.png"
  },
  {
    id: "4",
    name: "Bob Smith",
    skills: ["design", "ux", "figma", "photoshop"],
    profession: "Marketing Specialist",
    rating: "85%",
    profileimg:"/images/profile1.png"
  },
  {
    id: "5",
    name: "Bob Smith",
    skills: ["design", "ux", "figma", "photoshop"],
    profession: "Marketing Specialist",
    rating: "85%",
    profileimg:"/images/profile1.png"
  },
  {
    id: "6",
    name: "Bob Smith",
    skills: ["design", "ux", "figma", "photoshop"],
    profession: "Marketing Specialist",
    rating: "85%",
    profileimg:"/images/profile1.png"
  },
  {
    id: "7",
    name: "Bob Smith",
    skills: ["design", "ux", "figma", "photoshop"],
    profession: "Marketing Specialist",
    rating: "85%",
    profileimg:"/images/profile1.png"
  },
  {
    id: "8",
    name: "Bob Smith",
    skills: ["design", "ux", "figma", "photoshop"],
    profession: "Marketing Specialist",
    rating: "85%",
    profileimg:"/images/profile1.png"
  },
];

const profilesContainer = document.getElementById("profiles");

profiles.forEach((profile) => {
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



// Get all the candidate images
const candidateImages = document.querySelectorAll(".candidateImg");

// Get the modal element
const modal = document.getElementById("candidateModal");

// Get the <span> element that closes the modal
const closeButton = document.querySelector(".close-button");

// When the user clicks on a candidate image, show the modal
candidateImages.forEach((image) => {
  image.addEventListener("click", (event) => {
    // Get the clicked image and its position
    const clickedImage = event.target;
    const imageRect = clickedImage.getBoundingClientRect();

    // Get the details of the candidate from the profiles array
    const id = clickedImage.id;
    const clickedProfile = profiles.find(profile => profile.id == id);

    // Update the modal with the details of the clicked candidate
    const modalName = document.querySelector("#candidateModal .name");
    const modalProfession = document.querySelector("#candidateModal .profession");
    const modalImage = document.querySelector("#candidateModal img");
    const modalSkills = document.querySelector("#candidateModal .skills");
    const modalRating = document.querySelector("#candidateModal .rating");

    modalName.textContent = clickedProfile.name;
    modalProfession.textContent = clickedProfile.profession;
    modalImage.src = clickedProfile.profileimg;
    modalSkills.textContent = clickedProfile.skills.join(", ");
    modalRating.textContent = clickedProfile.rating;

    // Position the modal near the clicked image
    modal.style.top = `${imageRect.top + window.pageYOffset-20}px`;
    modal.style.left = `${imageRect.left + window.pageXOffset-320}px`;

    // Show the modal
    modal.classList.add("show");
    modal.style.display = "block";
  });
});



const container = document.querySelector('.contain90')

closeButton.addEventListener("click", () => {
  candidateModal.style.display = "none";
  });
  
  // Close the modal if the user clicks anywhere outside of it
  window.addEventListener("click", (event) => {
  if (event.target == container) {
  candidateModal.style.display = "none";
  }
  });





