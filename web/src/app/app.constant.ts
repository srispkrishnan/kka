//import * as Images from '../assets/images.json';
//https://www.facebook.com/p/Kongu-Kudumba-Amaipu-Canada-100046607741990/?paipv=0&eav=AfZ1BrJ9Ov_BKzQ8LgSTzCJ3MfRGxEdVa5Xd4ON4Re8Yyz6qPdvmiKrbCkf22D942js&_rdr
export interface ImageList {
    year: string;
    title: string;
    images: Image[]
  };
  
export  interface Image {
    imageSrc: string;
    imageAlt: string;
  };
  

export const emailService = {
    serviceId: 'service_hsxoc15',
    templateId: 'template_1hpg78r',
    key: 'QMfpQtk4UsP4w4HRI'
};

//export const images:ImageList[] = Images;

export const facebookPage = "https://www.facebook.com/p/Kongu-Kudumba-Amaipu-Canada-100046607741990/?paipv=0&eav=AfZ1BrJ9Ov_BKzQ8LgSTzCJ3MfRGxEdVa5Xd4ON4Re8Yyz6qPdvmiKrbCkf22D942js&_rdr";