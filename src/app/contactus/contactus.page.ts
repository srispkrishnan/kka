import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastController } from '@ionic/angular';
import { emailService } from '../app.constant';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {

  constructor(private toastController: ToastController) {}

  ngOnInit() {
    
  }

  showSubmitMessage = false;
  name = '';
  subject = '';
  email = '';
  phoneNumber = '';
  message='';
  isSubmitButtonDisabled:boolean = false;
  submitMessage = "";

  async submit(){
    let errors = this.validate();
    if (errors.length==0){
      this.isSubmitButtonDisabled = true;
      let emailPayload = {
        name: this.name,
        subject: this.subject,
        email: this.email,
        phoneNumber: this.phoneNumber,
        message: this.message
      };
      let response = await emailjs.send(emailService.serviceId, emailService.templateId , emailPayload, emailService.key);

      if (response.status == 200) {
        this.submitMessage = "Thank you for contacting Kongu Canada, Someone from admin team will be in touch with you soon.";
        this.showSubmitMessage = true;
        this.clear();
      } else {
        this.submitMessage = "Opps! something went wrong try again later. Sorry for the inconvenience.";
        this.showSubmitMessage = true;
        this.clear();
      }
      this.isSubmitButtonDisabled = false;
    }else{
      let message = '';
      errors.forEach(err => {
        message += err + '\n';
      });
      this.presentToast(message)
    }
  }

  clear() {
    this.name = '';
    this.subject = '';
    this.email = '';
    this.phoneNumber = '';
    this.message='';
  }

  ionViewWillEnter() {
    this.showSubmitMessage = false;
    this.isSubmitButtonDisabled = false;
    this.clear();
  }

  validate(){
    let errorMessages= [];
    if (this.name.trim()==""){
      errorMessages.push("Enter Name.");
    }
    if (this.email.trim()==""){
      errorMessages.push("Enter Email.");
    }else if (/^\S+@\S+\.\S+$/.test(this.email) == false){
      errorMessages.push("Invalid Email.");
    }
    if (this.phoneNumber.trim()==""){
      errorMessages.push("Enter Phone Number.");
    }else if(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(this.phoneNumber) == false) {
      errorMessages.push("Invalid Phone Number.");
    }
    if (this.subject.trim()==""){
      errorMessages.push("Enter Subject.");
    }
    if (this.message.trim()==""){
      errorMessages.push("Enter Message.");
    }
   
    return errorMessages;
  }

  async presentToast(error:any){
    const toast = await this.toastController.create({
      message: error,
      duration: 5500,
      position: 'top',
      cssClass: 'toast'
    });

    await toast.present();
  }
}
