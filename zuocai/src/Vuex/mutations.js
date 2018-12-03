//更改用户状态信息
export const userStatus=(state,user)=>{
	if(user){
		state.currentUser =user
		state.isLogin=true
	}else if(user==null){
	//登出的时候,清空sessionStorage里的东西
	sessionStorage.setItem("userName",null);
	state.currentUser=null;
	state.isLogin=false;
	}
}