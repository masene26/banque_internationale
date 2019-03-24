import Verification from '../interface/Verification.js'
    export default class Visa extends Verification{
        constructor(numero){
           super();
            this._num = numero;
            
         
        }
        verifier_code(){
            
            var numero_carte = new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/);
            if(numero_carte.test(this._number))
                  {
             
                //alert("Super");
                return true;
                  }
                else
                  {
                  //alert("Votre n'est pas carte n'est pas valide !");
                  return false;
                  }
               
                 
        }
        
    }