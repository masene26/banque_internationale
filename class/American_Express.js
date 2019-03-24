import Verification from '../interface/Verification.js'
    export default class American_Express extends Verification {
        constructor(numero){
            super();
             this._num = numero;
        }
        verifier_code(){
            var numero_de_la_carte = new RegExp(/^(?:3[47][0-9]{13})$/);
            if(numero_de_la_carte.test(this._numero))
                  {
                return true;
                  }
                else
                  {
                 // alert("Carte Amercican Express pas valide!");
                  return false;
                  }
          }

    }