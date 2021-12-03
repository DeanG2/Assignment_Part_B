

//Lab 11 work is below assignment part B work




//Index

/* 1. Create a function called cleanUpIndex that removes all 
of the DOM nodes that are unique to the Index page. 
This function takes no parameters. */

const main = document.querySelector(".main")

function removeAllChildren() {
  while (main.lastChild) {
      main.lastChild.remove()
  }
}

function cleanUpIndex() {
  removeAllChildren()
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
  removeAllChildren()
}




/* 5. Create a function called renderView that creates all of the DOM nodes 
that are unique to the View page.  This function will take in a single parameter, 
which is an object that represents a single contact.  Much like renderIndex, 
this function is responsible for actually modifying the web page. */

/*function renderView(contact) {

  const contactInfo = document.createElement("div")
  const profilePicture = document.createElement("img")
  const contactName = document.createElement("div")
  const contactEmail = document.createElement("div")
  const contactPhone = document.createElement("div")
  const contactAddress = document.createElement("div")
  const buttons = document.createElement("div")
  const editButton = document.createElement("button")
  const closeButton = document.createElement("button")

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
  contactInfo.className = "contactinfo"

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
  main.appendChild(contactInfo)


  const closeButton2 = document.querySelector(".close.button")

  closeButton2.addEventListener("click", (e)=> {
  e.preventDefault()
  cleanUpIndex()
  renderIndex(contactList)

})


}

*/

const closeButton2 = document.querySelector(".close.button")

closeButton2.addEventListener("click", (e)=> {
  e.preventDefault()
  cleanUpIndex()
  renderIndex(contactList)
})





/* How you can tell it's working
If you go to an index page, and you open the browser console, you should be able to:

call cleanUpView() to the part of the page that shows the individual contact
call renderView(contactList[0]) to put it back
the page should be exactly the same as it was before!
rinse and repeat*/


//Create Page

/* 6. Create a function called cleanUpCreate that removes all of the DOM nodes that are 
unique to the Create page. This function takes no parameters.*/

function cleanUpCreate() {
  removeAllChildren()
}



/* 7. Create a function called renderCreate that creates all of the DOM nodes that are 
unique to the Create page. This function will take in a single parameter, which is an object that 
represents a single contact. Much like renderIndex, this function is reponsible for actually 
modifying the web page.*/

/*function renderCreate() {

  var contactEdit = document.createElement("div")
  var image = document.createElement("img")
  var formDiv = document.createElement("div")
  var form = document.createElement("form")
  var contactImg = document.createElement("div")
  var contactName = document.createElement("div")
  var contactPhone = document.createElement("div")
  var contactAddress = document.createElement("div")
  var contactEmail = document.createElement("div")
  var buttons = document.createElement("div")
  var submitButton = document.createElement("button")
  var resetButton = document.createElement("button")
  var nameInput = document.createElement("input")
  var nameButton = document.createElement("button")
  var phoneInput = document.createElement("input")
  var phoneButton = document.createElement("button")
  var addressInput = document.createElement("input")
  var addressButton = document.createElement("button")
  var emailInput = document.createElement("input")
  var emailButton = document.createElement("button")


  image.src = "./img/profile.jpg"
  contactName.className = "inputcontainer"
  contactPhone.className = "inputcontainer"
  contactAddress.className = "inputcontainer"
  contactEmail.className = "inputcontainer"
  image.className = "profilepic"
  image.alt = "Profile picture"
  contactImg.className = "contactimg"
  buttons.className = "buttons"
  submitButton.className = "button save"
  submitButton.id = "savecontact"
  submitButton.name = "savecontact"
  submitButton.type = "submit"
  submitButton.innerHTML = "Save Contact"
  resetButton.className = "button cancel"
  resetButton.id = "cancel"
  resetButton.name = "cancel"
  resetButton.type = "reset"
  resetButton.innerHTML = "Cancel"
  formDiv.className = "form"
  nameInput.id = "contactname"
  nameInput.placeholder = "Contact Name"
  nameInput.name = "contactname"
  nameButton.className = "extrafield"
  nameButton.id = "extranamefield"
  nameButton.name = "extranamefield"
  nameButton.innerHTML = "+"
  phoneInput.type = "tel"
  phoneInput.id = "contactphone"
  phoneInput.name = "contactphone"
  phoneInput.placeholder = "Contact Phone"
  phoneButton.className = "extrafield"
  phoneButton.id = "extraphonefield"
  phoneButton.name = "extraphonefield"
  phoneButton.innerHTML = "+"
  addressInput.id = "contactaddress"
  addressInput.placeholder = "Contact Address"
  addressInput.name = "contactaddress"
  addressButton.className = "extrafield"
  addressButton.id = "extraaddressfield"
  addressButton.name = "extraaddressbutton"
  addressButton.innerHTML = "+"
  emailInput.placeholder = "Contact Email"
  emailInput.id = "contactemail"
  emailInput.name = "contactemail"
  emailInput.type = "email"
  emailButton.className = "extrafield"
  emailButton.id = "extraemailfield"
  emailButton.name = "extraemailfield"
  emailButton.innerHTML = "+"
  contactEdit.className = "contactedit"
  


  contactImg.appendChild(image)
  contactEdit.appendChild(contactImg)
  buttons.appendChild(submitButton)
  buttons.appendChild(resetButton)
  contactName.appendChild(nameInput)
  contactName.appendChild(nameButton)
  contactPhone.appendChild(phoneInput)
  contactPhone.appendChild(phoneButton)
  contactAddress.appendChild(addressInput)
  contactAddress.appendChild(addressButton)
  contactEmail.appendChild(emailInput)
  contactEmail.appendChild(emailButton)
  form.appendChild(contactName)
  form.appendChild(contactPhone)
  form.appendChild(contactAddress)
  form.appendChild(contactEmail)
  form.appendChild(buttons)
  formDiv.appendChild(form)
  contactImg.appendChild(image)
  contactEdit.appendChild(contactImg)
  contactEdit.appendChild(formDiv)
  main.appendChild(contactEdit)


}

*/


/*How you can tell it's working
If you go to an index page, and you open the browser console, you should be able to:
call cleanUpCreate() to delete the form and all the inputs and so on
call renderCreate() to put it all back
the page should be exactly the same as it was before!
rinse and repeat*/

//Lab 11

/*(1)
Create a global JS variable to contain the contact list.  Mine is called `contactList`, but you can do what you like.
Yes, global variables are bad.  Yes, I'm explicitly telling you to do something bad here.  Just play along.
You may change the initial contacts in it if you like, but you should probably have at least 2, just to make your own life easier.

//CONTACT LIST IS ABOVE IN FUNCTION 3, HERE IS MY COMMENTED OUT CONTACT LIST

/*
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
*/


/*
(2)
Attach an event listener to the sidebar link that says "Contacts".
Any click on this should call a clear function that clears the main area, then call the renderIndex function, passing in the global contact list.
Also this listener should cancel the event, so that the link is not followed in the normal way.
*/

const contact = document.querySelector(".nav-home")

contact.addEventListener("click", (e)=> {
  e.preventDefault()
  cleanUpIndex()
  renderIndex(contactList)
})


/*
(3)
Attach an event listener to the sidebar link that says "Create New Contact".
Any click on this should call a clear function that clears the main area, then call the renderCreate function.
Also this listener should cancel the event, so that the link is not followed in the normal way.
*/

const newContact = document.querySelector(".nav")

newContact.addEventListener("click", (e)=> {
  e.preventDefault()
  cleanUpCreate()
  renderCreate()
})



/*
(4)
Modify your createSingleIndex function so that the entire singleIndex DOM element has a click handler.
This click handler is a bit more complicated.
First, it must figure out the "name" that it was created with.  For example, "Bugs Bunny".
Then, it must search through the global contact list to find a contact that has that name.
Then, if it found that contact, it should
   a) call a clear function to clear out the main area, and
   b) call renderView(), passing it the contact that it found
Also this listener should cancel the event, so that the link is not followed in the normal way.
I am not *requiring* you to put all the code for this task inside the createSingleIndex function, but
   I am *advising you* that with the tools I have shown you, that's probably easiest.
*/







/*
(5)
Modify your renderView function, add an event listener to the "Close" button.  It should act the same
as if you press the "Contacts" link in the sidebar.  I leave the details to you.
*/

/*
(6)
Also in the renderView function, ensure that clicking on "Edit" does nothing.
(Unless you're tackling the bonus, see below)
*/


//Both 5 and 6 answered here, moved renderView function down and added to the bottom

function renderView(contact) {

  const contactInfo = document.createElement("div")
  const profilePicture = document.createElement("img")
  const contactName = document.createElement("div")
  const contactEmail = document.createElement("div")
  const contactPhone = document.createElement("div")
  const contactAddress = document.createElement("div")
  const buttons = document.createElement("div")
  const editButton = document.createElement("button")
  const closeButton = document.createElement("button")

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
  contactInfo.className = "contactinfo"

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
  main.appendChild(contactInfo)

  closeButton.addEventListener("click", (e)=> {
  e.preventDefault()
  cleanUpIndex()
  renderIndex(contactList)
  
  editButton.addEventListener("click", (e)=> {
    e.preventDefault()
  })

})


}




/*
(7)
Modify your renderCreate function, add an event listener to the "Cancel" button.  It should act the same
as if you press the "Contacts" link in the sidebar.  I leave the details to you.
Yes, this is nearly identical to (5), thank you for noticing.
*/

//again, moved renderCreate function down here to answer

function renderCreate() {

  var contactEdit = document.createElement("div")
  var image = document.createElement("img")
  var formDiv = document.createElement("div")
  var form = document.createElement("form")
  var contactImg = document.createElement("div")
  var contactName = document.createElement("div")
  var contactPhone = document.createElement("div")
  var contactAddress = document.createElement("div")
  var contactEmail = document.createElement("div")
  var buttons = document.createElement("div")
  var submitButton = document.createElement("button")
  var resetButton = document.createElement("button")
  var nameInput = document.createElement("input")
  var nameButton = document.createElement("button")
  var phoneInput = document.createElement("input")
  var phoneButton = document.createElement("button")
  var addressInput = document.createElement("input")
  var addressButton = document.createElement("button")
  var emailInput = document.createElement("input")
  var emailButton = document.createElement("button")


  image.src = "./img/profile.jpg"
  contactName.className = "inputcontainer"
  contactPhone.className = "inputcontainer"
  contactAddress.className = "inputcontainer"
  contactEmail.className = "inputcontainer"
  image.className = "profilepic"
  image.alt = "Profile picture"
  contactImg.className = "contactimg"
  buttons.className = "buttons"
  submitButton.className = "button save"
  submitButton.id = "savecontact"
  submitButton.name = "savecontact"
  submitButton.type = "submit"
  submitButton.innerHTML = "Save Contact"
  resetButton.className = "button cancel"
  resetButton.id = "cancel"
  resetButton.name = "cancel"
  resetButton.type = "reset"
  resetButton.innerHTML = "Cancel"
  formDiv.className = "form"
  nameInput.id = "contactname"
  nameInput.placeholder = "Contact Name"
  nameInput.name = "contactname"
  nameButton.className = "extrafield"
  nameButton.id = "extranamefield"
  nameButton.name = "extranamefield"
  nameButton.innerHTML = "+"
  phoneInput.type = "tel"
  phoneInput.id = "contactphone"
  phoneInput.name = "contactphone"
  phoneInput.placeholder = "Contact Phone"
  phoneButton.className = "extrafield"
  phoneButton.id = "extraphonefield"
  phoneButton.name = "extraphonefield"
  phoneButton.innerHTML = "+"
  addressInput.id = "contactaddress"
  addressInput.placeholder = "Contact Address"
  addressInput.name = "contactaddress"
  addressButton.className = "extrafield"
  addressButton.id = "extraaddressfield"
  addressButton.name = "extraaddressbutton"
  addressButton.innerHTML = "+"
  emailInput.placeholder = "Contact Email"
  emailInput.id = "contactemail"
  emailInput.name = "contactemail"
  emailInput.type = "email"
  emailButton.className = "extrafield"
  emailButton.id = "extraemailfield"
  emailButton.name = "extraemailfield"
  emailButton.innerHTML = "+"
  contactEdit.className = "contactedit"
  


  contactImg.appendChild(image)
  contactEdit.appendChild(contactImg)
  buttons.appendChild(submitButton)
  buttons.appendChild(resetButton)
  contactName.appendChild(nameInput)
  contactName.appendChild(nameButton)
  contactPhone.appendChild(phoneInput)
  contactPhone.appendChild(phoneButton)
  contactAddress.appendChild(addressInput)
  contactAddress.appendChild(addressButton)
  contactEmail.appendChild(emailInput)
  contactEmail.appendChild(emailButton)
  form.appendChild(contactName)
  form.appendChild(contactPhone)
  form.appendChild(contactAddress)
  form.appendChild(contactEmail)
  form.appendChild(buttons)
  formDiv.appendChild(form)
  contactImg.appendChild(image)
  contactEdit.appendChild(contactImg)
  contactEdit.appendChild(formDiv)
  main.appendChild(contactEdit)

  resetButton.addEventListener("click", (e)=> {
    e.preventDefault()
    cleanUpIndex()
    renderIndex(contactList)
  })


}





/*
(8)
And now for the real muscle.   This is where we do something interesting.
In your renderCreate function, add an event listener to the "Save" button.
In this event listener, create a new object, with keys like "name", "email", "phone", and "address".
For each of those keys, the value should be pulled out of the appropriate input.
At first, to test, once you have created this object, you could `console.log` it, to see that you're making it correctly.
*/







/*
(9)
Continuing part (8), append this new object to your global contact list.
Also, clear the main area, and then call renderView, passing it your new contact.
Also, cancel the event, so that there are no other consequences of clicking on the button.
*/







/*
(10)
In your index.html, delete the dummy data (Barry Allen, Bev Crusher, Diana Prince).
Make it so that, when the page first loads, the JavaScript code for populating the index is run immediately
(i.e. make it as if someone clicked on Contacts)
This is so you don't have old buggy contacts from A1 kicking around, messing up your lovely new app.
*/