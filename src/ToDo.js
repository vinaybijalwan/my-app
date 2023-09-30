
function ToDo(){

        function handleChange(e){
            console.log(e.target.value)
        }
    return(
        <div>
           <input type = "text" placeholder="Please add item" onChange={handleChange} />
        </div>
    )
}

export default ToDo;