


const Tweet = (props)=>{


    return ( 

    <h1>Tweet by {props.name}</h1>,

    <div>
      <p> username: {props.username}</p>
      <p> date : {props.date}</p>
      <p> tweet: {props.message}</p>
    </div>

    )
    
}