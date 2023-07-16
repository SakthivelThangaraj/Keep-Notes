var dash = document.getElementById("dash");
var profi = document.getElementById("profi");
// var enroll = document.getElementById("enroll");
var dashboard = document.getElementById("notes");
var profile = document.getElementById("remainder");
// var enrolled = document.getElementById("enrolled");
dash.addEventListener('click',()=>{
    notes.style.display='block';
    remainder.style.display='none';
    // enrolled.style.display='none';
});
profi.addEventListener('click',()=>{
    notes.style.display='none';
    remainder.style.display='block';
    // enrolled.style.display='none';
});
// enroll.addEventListener('click',()=>{
//     dashboard.style.display='none';
//     profile.style.display='none';
//     enrolled.style.display='block';
// });