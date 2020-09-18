
export default function validate(user) {
    let errors = {};
    if(!user.username.trim()){
        errors.username="Username required"
    }else if(user.username.length<4){
        errors.username="User name Invalid"
    }else if(!(/^[a-zA-Z0-9]+[^@#$*&]+$/.test(user.username))){
        errors.username="User name Invalid"
    }
    if(!user.password){
        errors.password="Password required"
    }else if(user.password.length<4){
        errors.password="Password invalid for length"
    }else if(!(/^[A-Z]+[a-z]+[0-9]+[@#$&]+$/.test(user.password))){
        errors.password="Password Invalid for 1spec char one number one Caps one Small"
    }

    return errors;
}