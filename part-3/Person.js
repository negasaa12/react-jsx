


const Person = (props)=> {
    let name  = props.name
     let h3;

    if(props.age > 18){
        h3= "please go VOTE"
    } 
    else{
        h3= "you must be 18 to vote"
    }

    if(name.length > 8){
        name = name.substring(0, 8);
    }
    return (
        <div>
        <p> Learn some information about this person</p>

        <p> Name: {name}</p>

         <p>Age: {props.age}</p>
         
         <ul>Hobbies: {props.hobbies.map((hobby) => <li>{hobby}</li>)}</ul>
         
        <h3>{h3}</h3>
        </div>
    )
}