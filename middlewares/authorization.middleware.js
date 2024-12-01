function authorize(roles) {
	return (req, res, next) => {
		const user = req.user;
		if (!user || !user.role) {
			return res.end('Unauthorized');
		}
        
        if(roles.includes(user.role)){
           return next()
        }
		// else {
			res.end('Unauthorized')
		// }
		
        
	};
}

module.exports={authorize}