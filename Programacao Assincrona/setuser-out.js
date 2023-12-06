const user = {
    name: "matheus",
    sayUserNameArrow(){
        setTimeout(()=>{
            console.log("Olá: " + this.name);
        }, 700)
    }
}

user.sayUserNameArrow();