const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '59e469448dd086132077bc35';

// User.find({
// 	_id: id
// }).then((user) => {
// 	console.log('USER:',user);
// });

// User.findOne({
// 	_id: id
// }).then((user) => {
// 	console.log('USER:',user);
// });

User.findById(id).then((user) => {

	if(!user){
		return console.log('User not Found')
	}
	console.log(JSON.stringify(user.email, undefined, 2));
}, (e) =>{
	console.log(e.message);
});