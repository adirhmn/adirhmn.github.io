if(localStorage.getItem('users')==null){
    new User('Manajer', 'Unlimited', 'Adi', 'Rahman', 'admin', 'Jakarta', '09/08/2000', 135700002, 'Manajer', 'Hardworker', 08132145262, 'adi@gmail.com', 'admin');
    new User('Manajer', 'Unlimited', 'Adi', 'Rahman', 'admin', 'Jakarta', '09/08/2000', 135700002, 'Manajer', 'Hardworker', 08132145262, 'adi@gmail.com', 'admin');
  }

if(localStorage.getItem('active-user')==null){
  document.getElementById('profile_nav').classList.add('hide');
  document.getElementById('button_nav').classList.remove('hide');
}
if(localStorage.getItem('active-user')!=null){
  document.getElementById('profile_nav').classList.remove('hide');
  document.getElementById('button_nav').classList.add('hide');
}

function User(type, period, firstname, lastname, codename, address, dob, nik, profession, skillset, phone, email, password){
  this.type=type;
  this.period=period;
  this.firstname=firstname;
  this.lastname=lastname;
  this.codename=codename;
  this.address=address;
  this.dob=dob;
  this.nik=nik;
  this.profession=profession;
  this.skillset=skillset;
  this.phone=phone;
  this.email=email;
  this.password=password;

  newUser={
    'Type Member' : this.type,
    'Join Period' : this.period,
    'Name' : this.firstname + ' ' + this.lastname,
    'Code Name' : this.codename,
    'Address' : this.address,
    'Date of Birth' : this.dob,
    'NIK' : this.nik,
    'Profession' : this.profession,
    'Skillset' : this.skillset,
    'Phone Number' : this.phone,
    'Email' : this.email,
    'Password' :this.password
  }

  let users=[];
  if(localStorage.getItem('users') === null){
    users=[];
  }else{
    users=JSON.parse(localStorage.getItem('users'));
    users.push(newUser);
  }

  localStorage.setItem('users', JSON.stringify(users));
}

const btnProfile=document.querySelectorAll('#dropdown1 a')[2];
btnProfile.addEventListener('click', function(){
  if(localStorage.getItem('active-user')=='admin'){
    btnProfile.setAttribute('href', 'admin-profile.html');
  }else{
    btnProfile.setAttribute('href', 'member-profile.html');
  }
})

const btnDashboard=document.querySelectorAll('#dropdown1 a')[3];
btnDashboard.addEventListener('click', function(){
  if(localStorage.getItem('active-user')=='admin'){
    btnDashboard.setAttribute('href', 'admin-dashboard.html');
  }else{
    btnDashboard.setAttribute('href', 'member-dashboard.html');
  }
})

const btnLogout=document.querySelectorAll('#dropdown1 a')[4];
  btnLogout.addEventListener('click', function(){
  localStorage.removeItem('active-user');
  btnLogout.setAttribute('href', 'signin.html');
})

textHello=document.querySelector('.panel-profile h3');
textHello.innerHTML=localStorage.getItem('active-user');


