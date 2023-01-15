export default function(input: string) { 
	var passw = /^(?=.*\d)(.*[a-z])(.*[A-Z]).{6,20}$/;
	if(input.match(passw)) 
	{
		return true;
	}
	else
	{
		var validationMsg = "Password should meet following requirements: "
		if(!input.match('.*[0-9].*')){
			validationMsg+=" have at least one digit; "
		}
		if(!input.match('.*[a-z]')){
			validationMsg+=" have at least one lowercase letter; "
		}
		if(!input.match('.*[A-Z]')){
			validationMsg+=" have at least one uppercase letter; "
		}
		if(!input.match('^.{6,20}$')){
			validationMsg+=" be longer than 6 and shorter than 20 symbols; "
		}
		return validationMsg+"Please, try again.";
	}
}
