
import Card from "./Card";

import classes from "./Sidebar.module.css";

const Sidebar = ()=> {

    return (
        <div className={classes.sidebar}>
           

            <ul >

                <li><a href=""><b>HOME</b></a></li>

                <li><a href="">PUBLIC</a></li>

                <ul>
                <li><a href="">Questions</a></li>
                <li><a href="">Tags</a></li>
                <li><a href="">Users</a></li>
                <li><a href="">Companies</a></li>
                </ul>

                <li><a href="">COLLECTIVES</a></li>

                <ul>
                    <li><a href="">Explore Collectives</a></li>
                </ul>

                <li><a href="">TEAMS</a></li>

                <ul>
                
                    <li><a href="">Create Free Teams</a></li>
                </ul>


            </ul>
           
            <Card title="Custom Filter" content="create a custom filter"/>
            <Card title="Watched Tags" content="Java"/>
           
        </div>
    );

}

export default Sidebar;