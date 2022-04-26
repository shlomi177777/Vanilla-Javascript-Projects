const data = [
{
    name: 'Idan Levi',
    age: '30',
    gender: 'male',
    lookingfor: 'female',
    location: 'Tal-aviv',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
},
{
    name: 'lidya Shaul',
    age: '28',
    gender: 'female',
    lookingfor: 'male',
    location: 'Beer-Sheba',
    image: 'https://randomuser.me/api/portraits/women/67.jpg'
},
{
    name: 'Moshe Naim',
    age: '32',
    gender: 'male',
    lookingfor: 'male',
    location: 'Rishon',
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
}
];

const profiles = profileIterator(data);

//Call first profile
nextProfile();

//Next Event
document.getElementById('next').addEventListener('click',nextProfile);

//Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if(currentProfile != undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>   
            <li class="list-group-item">Age: ${currentProfile.age}</li>   
            <li class="list-group-item">Location: ${currentProfile.location}</li>   
            <li class="list-group-item">Preferetion: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>   
            </ul>  
        `
        document.getElementById('imageDisplay').innerHTML= `<img src="${currentProfile.image}">`;
    }else{
        //No more profiles
        window.location.reload();
    }
}

//Profile Iteretor
function profileIterator(profiles) {
    let nextIndex = 0;
  
    return {
      next: function() {
        return nextIndex < profiles.length ? 
        { value: profiles[nextIndex++], done: false } : 
        { done: true }
      }
    };
  }