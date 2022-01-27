console.log("Welcome to  AddressBook using JavaScript");   

/**
 * UC1: Create an address book contact with first name,last name,address, city,state,zip , phone number and email id  
 * @param: FirstName, LastName,Address, City,State,Zip , PhoneNum,Email
 * @return: which returns contact details
 */


 let nameregex = RegExp('^[A-Z]{1}[a-z]{3,}$');
 let lastnameregex = RegExp('^[A-Z]{1}[a-z]{3,}$');

 const addressregex = RegExp('^[a-zA-Z0-9#,]{4,}$');
 const cityregex = RegExp('^[a-zA-Z]{4,}$');
 const stateregex = RegExp('^[a-zA-Z]{4,}$');
 const zipregex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
 const phoneNumberegex = RegExp('^\\d{2}(\\s{1}\\d{10})$');
 const emailregex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");


 class Contact {

    constructor(firstName,lastName,city,address,state,zip,phoneNumber,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.address = address;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get city() {
        return this._city;
    }
    get address(){
        return this._address;
    }

    get state() {
        return this._state;
    }

    get zip() {
        return this._zip;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    get email() {
        return this._email;
    }

    set firstName(firstName) {
        if (nameregex.test(firstName))
            this._firstName = firstName;
        else
            throw "FIRST NAME is Incorrect ";
    }
    set lastName(lastName) {
        if (lastnameregex.test(lastName))
            this._lastName = lastName;
        else
            throw "last NAME is Incorrect ";
    }


    set address(address) {
        if (addressregex.test(address))
            this._address = address;
        else
            throw "ADDRESS is Incorrect";
    }

    set city(city) {
        if (cityregex.test(city))
            this._city = city;
        else
            throw "CITY is Incorrect";
    }

    set state(state) {
        if (stateregex.test(state))
            this._state = state;
        else
            throw "STATE is Incorrect";
    }

    set zip(zip) {
        if (zipregex.test(zip))
            this._zip = zip;
        else
            throw "ZIP is Incorrect";
    }

    set phoneNumber(phoneNumber) {
        if (phoneNumberregex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "PHONE NUMBER is Incorrect";
    }

    set email(email) {
        if (emailregex.test(email))
            this._email = email;
        else
            throw "EMAIL ADDRESS is Incorrect";
    }

    toString() {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", City : " + this.city + ", address : " + this.address+ " ,State : " + this.state + ", Zip : " + this.zip + ", Phone Number : " + this.phoneNumber + ", Email : " + this.email;
    }
}

//let contact = new Contact("Anusha", "Nallapu", "warangal","NTR street", "telangana", 506001, 9652814314, "anusha@gmail.com");
//console.log(contact.toString());

/**UC2: Ensure valid contacts are added; 
 *      
 *  first name and last name should start with capital and should have minimum three characters
 * Address, city and state should have minimum 4 characters...
 * 
 * 
 * @param: FirstName, LastName,Address, City,State,Zip , PhoneNum,Email
 * 
 *  * @return: which returns a mapfunction to validate if else statement
 */
//  try {
//     let contact = new Contact("Anusha", "Nallapu","Rotary nagar", "warangal", 'telanagna', 506001, '91 9658241764', "abc@gmail.com");
//     console.log(contact.toString());
// } catch (e) {
//     console.log(e);
// }

   /**UC3 ability to create a new address book  array and add new contact to it
    * @returns whih  returns array from the addressbook
    */

   let addressbookArray = new Array();
   try {
    addressbookArray.push(new Contact("sam", "mehtha", "srnagar", "khammam", "telangana", 507303, "91 9875486186", "sam@gmail.com"));
} catch (e) {
    console.error(e);
}

try {
    addressbookArray.push(new Contact("Anusha", "Nallapu","Rotary nagar", "warangal", 'telanagna', 506001, '91 9658241764', "abc@gmail.com"));
} catch (e) {
    console.log(e);
}
console.log(addressbookArray);
 