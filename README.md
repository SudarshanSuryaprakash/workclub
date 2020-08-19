# workclub
Installation
1. Run 'npm i' in the parent folder
2. cd to workclub-client
3. Run 'npm i' here

Running
1. Run 'node index.js' on the parent folder
2. cd to workclub-client
3. Run 'npm start'

Project Structure:
Parent Folder is the server
The server has Two folders - Models (Contains database information) and Routes (Contains node.js api for Signin and Signup)

The workclub-client folder is the react app.
It contains 3 folders - actions, reducers and Components.
Components:
  App is the main landing page
    Contains ContactCreator - the form to enter a new contact
    Maps over each Contact - To render a contact on screen
    EditContact is the form that pops up to edit a selected contact
 
 actions:
  index.js has all the action creators:
    contactInputChange is basically an input useState
    editContactInStore allows for a field called edited to be altered so that I can update that contact at a later stage
    addContactToStore adds a contact to the store
    emptyFields empties the input fields in ContactCreator
    deleteContactFromStore deletes a contact from store by looking at its email - to do - can be improved by looking at the id.
    updateContact dispatches a reducer to map over all the contacts and looks for edited: true to update that particular contact
    statusUpdateInStore is used to update the status of the contact - either active or inactive
    
reducers:
  contactInputReducer - the useState() for contact input
  contactReducer - For CRUD operations
  expandReducer - to expand the contactCreator
    
    
