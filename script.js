//Index

/* 1. Create a function called cleanUpIndex that removes all 
of the DOM nodes that are unique to the Index page. 
This function takes no parameters. */

function cleanUpIndex() {

  const main = document.querySelector(".main")

  while (main.lastChild) {
  main.lastChild.remove()
  }

}




/*2. Create a function called createSingleIndex that creates a DOM 
node that represents a single index card for the Index page.  This 
function will take in a single object, where that object represents
a single contact (see examples below).  It should output a DOM node. 
It does not need to attach the DOM node to the rest of the DOM.*/

function createSingleIndex(object) {

  var newDiv = document.createElement("div")
  var para = document.createElement("p")
  var newLink = document.createElement("a")

  newLink.href = "page3.html"
  newDiv.className = "contact"
  para.innerHTML = object.name

  newDiv.append(para)
  newLink.append(newDiv)
  
  return newLink

}





/*3. Create a function called renderIndex that creates all of the DOM nodes that are unique to the Index page. 
This function will take in a single parameter, which is an array containing many contacts, each of which represents a single contact. 
An example array of contacts is provided below. But be warned, I will supply the array, and I may change the details, 
like how many contacts there are. Obviously the reason you wrote createSingleIndex is because I thought it would help you write this 
function. Unlike createSingleIndex, which just sort of creates some stuff in isolation, this function must actually put DOM nodes onto 
the web page. */

let contactList = [
  {
    name: "Roberta Dobbs",
    phone: "778-555-1234",
    address: "101 Main St, Anytown, USA",
    email: "subgenius@slack.example.com",
  }, 
  {
    name: "Bugs Bunny",
    phone: "123-867-5309",
    address: "Warner Brothers Animation Lot",
    email: "whatsup@doc.example.com",
  },
  {
    name: "John Cena",
    phone: "604-987-6543",
    address: "123 Tap St, Boise, Idaho",
    email: "ucantseeme@outlook.com",
  }
]

function renderIndex(contacts) {

  const main = document.querySelector(".main")

  for (var i=0; i < contacts.length; i++) {

    var element = contactList[i]
    main.appendChild(createSingleIndex(element)

    )}
}









/*
//View Page


/* 4. Create a function called cleanUpView that removes all of the DOM nodes that are unique to the View page. 
This function takes no parameters. */

function cleanUpView() {

  const contactInfo = document.querySelector(".contactinfo")

  while (contactInfo.lastChild) {
  contactInfo.lastChild.remove()
  }

}




/* 5. Create a function called renderView that creates all of the DOM nodes 
that are unique to the View page.  This function will take in a single parameter, 
which is an object that represents a single contact.  Much like renderIndex, 
this function is responsible for actually modifying the web page. */

function renderView(contact) {

  var main = document.querySelector(".main")
  var contactInfo = document.querySelector(".contactinfo")
  var profilePicture = document.createElement("img")
  var contactName = document.createElement("div")
  var contactEmail = document.createElement("div")
  var contactPhone = document.createElement("div")
  var contactAddress = document.createElement("div")
  var buttons = document.createElement("div")
  var editButton = document.createElement("button")
  var closeButton = document.createElement("button")

  profilePicture.src = "./img/profile.jpg"
  contactName.className = "contactname"
  contactEmail.className = "contactemail"
  contactPhone.className = "contactphone"
  contactAddress.className = "contactaddress"
  profilePicture.className = "profilepic"
  profilePicture.alt = "Profile picture"
  buttons.className = "buttons"
  editButton.className = "button edit"
  editButton.valueName = "Edit"
  closeButton.className = "button close"
  closeButton.valueName = "Close"

  contactName.innerHTML = contact.name
  contactEmail.innerHTML = "email: " + contact.email
  contactPhone.innerHTML = "cell: " + contact.phone
  contactAddress.innerHTML = "address: " + contact.address
  editButton.innerHTML = "Edit"
  closeButton.innerHTML = "Close"

  contactName.appendChild(profilePicture)
  buttons.appendChild(editButton)
  buttons.appendChild(closeButton)
  contactInfo.appendChild(contactName)
  contactInfo.appendChild(contactEmail)
  contactInfo.appendChild(contactPhone)
  contactInfo.appendChild(contactAddress)
  contactInfo.appendChild(buttons)

}






/* How you can tell it's working
If you go to an index page, and you open the browser console, you should be able to:

call cleanUpView() to the part of the page that shows the individual contact
call renderView(contactList[0]) to put it back
the page should be exactly the same as it was before!
rinse and repeat*/


//Create Page

/* 6. Create a function called cleanUpCreate that removes all of the DOM nodes that are 
unique to the Create page. This function takes no parameters.*/





/* 7. Create a function called renderCreate that creates all of the DOM nodes that are 
unique to the Create page. This function will take in a single parameter, which is an object that 
represents a single contact. Much like renderIndex, this function is reponsible for actually 
modifying the web page.*/




/*How you can tell it's working
If you go to an index page, and you open the browser console, you should be able to:
call cleanUpCreate() to delete the form and all the inputs and so on
call renderCreate() to put it all back
the page should be exactly the same as it was before!
rinse and repeat*/