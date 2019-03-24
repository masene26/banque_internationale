import Verification from '../interface/Verification.js'
    export default class Mastercard extends Verification{
        constructor(numero){
            super();
             this._num = numero;
        }
        verifier_code(){
            var numerocarte = new RegExp(/^(?:5[1-5][0-9]{14})$/);
         if(numerocarte.test(this._numero))
        {
            alert("Super!");
             return true;
        }
         else
        {
            //alert("votre carte Mastercard n'est pas valide!");
            return false;
            }
        }
    }