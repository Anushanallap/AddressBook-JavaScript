console.log("Welcome to  AddressBook using JavaScript");   

/**
 * UC1: Create an address book contact with first name,last name,address, city,state,zip , phone number and email id  
 * @param: FirstName, LastName,Address, City,State,Zip , PhoneNum,Email
 * @return: which returns contact details
 */
 class Contact {

    constructor(firstName,lastName,city,state,zip,phoneNumber,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
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
        this._firstName = firstName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    set city(city) {
        this._city = city;
    }

    set state(state) {
        this._state = state;
    }

    set zip(zip) {
        this._zip = zip;
    }

    set phoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber;
    }

    set email(email) {
        this._email = email;
    }

    toString() {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", City : " + this.city + ", State : " + this.state + ", Zip : " + this.zip + ", Phone Number : " + this.phoneNumber + ", Email : " + this.email;
    }
}

let contact = new Contact("Anusha", "Nallapu", "warangal", "telangana", 506001, 9652814314, "anusha@gmail.com");
console.log(contact.toString());