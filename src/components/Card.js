
import classes from "./Card.module.css";

const Card = (props)=>{
 
    return (
     
        <div className={classes.flexContainer}>
        
          <div >{props.title}</div>
          <div><a href="">{props.content}</a></div>

        </div>

    );



}

export default Card;