abstract class Contact {
    protected name: string;
    protected phoneNumber: string;
    protected address: string;
  
    constructor(name: string, phoneNumber: string, address: string) {
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.address = address;
    }
  
    abstract showContact(): void;
  }
  
  class Person extends Contact {
    private email: string;
  
    constructor(name: string, phoneNumber: string, address: string, email: string) {
      super(name, phoneNumber, address);
      this.email = email;
    }
  
    showContact(): void {
      console.log(`Name: ${this.name}`);
      console.log(`Phone Number: ${this.phoneNumber}`);
      console.log(`Address: ${this.address}`);
      console.log(`Email: ${this.email}`);
    }
  }
  
  class Business extends Contact {
    private companyName: string;
    private websiteName: string;
  
    constructor(name: string, phoneNumber: string, address: string, companyName: string, websiteName: string) {
      super(name, phoneNumber, address);
      this.companyName = companyName;
      this.websiteName = websiteName
    }
  
    showContact(): void {
      console.log(`Name: ${this.name}`);
      console.log(`Phone Number: ${this.phoneNumber}`);
      console.log(`Address: ${this.address}`);
      console.log(`Company Name: ${this.companyName}`);
      console.log(`website Name: ${this.websiteName}`);
    }
  }
  
  class AddressBook {
    private contacts: Contact[] = [];
  
    addContact(contact: Contact): void {
      this.contacts.push(contact);
    }
  
    showContacts(): void {
      this.contacts.forEach((contact) => {
        contact.showContact();
        console.log("");
      });
    }
  }
  
  let addressBook = new AddressBook();
  
  let person = new Person("Temirex Ade", "+234-8109-4576", "91, Jebba Street", "temirexAde02@gmai.com");
  let business = new Business("TBD_koncepts", "+234-9134-7729", "74/76 Boudilon Street, Ikeja", "TBD & Groups", "www.tbdkoncepts.io");
  
  addressBook.addContact(person);
  addressBook.addContact(business);
  
  addressBook.showContacts();