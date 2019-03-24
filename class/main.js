import Verification from '../interface/Verification.js';
import Visa from '../class/Visa.js'
import Mastercard from '../class/Mastercard.js'
import American_Express from '../class/American_Express.js'
    //let tire_c = new Visa();
    //let tire_b=new Mastercard(5123654789652358);
    //let tem;
    let tire_a = prompt("Entrer un numero de carte");
    let tire_v = new Visa(tire_a);
    let tire_m = new Mastercard(tire_a);
    let tire_n = new American_Express(tire_a);

    let tire_x = tire_v.verifier_code();
    let tire_y = tire_m.verifier_code();
    let tire_z = tire_n.verifier_code();
    if(tire_x===true)
    console.log("carte visa")
    if(tire_y===true)
    console.log("Mastercard")
    if(tire_z===true)
    console.log("American_Express")     
    if(!tire_x  && !tire_y && !tire_z) 
    console.log("numero de carte est incorrecte")
    //console.log(tire_x);
   // console.log(tire_c);