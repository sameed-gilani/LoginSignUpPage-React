import {useState} from 'react';


export default function ItemSwapper(props) {

    const [itemArray, setItermArray] = useState([
            {name:"Jonathan",isClicked:false,placement:'top',color:'black'},
            {name:"Joseph",isClicked:false,placement:'top',color:'black'},
            {name:"Dio",isClicked:false,placement:'top',color:'black'},
            {name:"Giorno",isClicked:false,placement:'top',color:'black'}
        ]
    )
    const [update, setUpdate] = useState(false)

    function listUsers(whichOnes){

        const filteredArr = itemArray.filter(user => user.placement === whichOnes);
        const listItems = filteredArr.map((user) =>

            <li style={{color:user.color}} key={user.name} onClick={()=>{

                user.isClicked=!user.isClicked
                if(user.isClicked) {
                    user.color = 'red'
                }else{
                    user.color = 'black'
                }
                setUpdate(!update)

                console.log(user.name,user.isClicked)

            }}>{user.name}</li>
        );

        return (
            <ul>{listItems} </ul>
        );

    }


    function HandleUpdate(event){
        console.log(itemArray)

        itemArray.forEach((obj)=>{
            if(obj.isClicked === true && event.target.value !== obj.placement){
                obj.placement = event.target.value
                obj.isClicked = false
                obj.color = 'black'
            }


        })

        setUpdate(!update)

    }


    return(
        <div>

            <h1>Top</h1>
            {listUsers("top")}
            <h1>------------</h1>
            <h1>Bottom</h1>
            {listUsers("bottom")}

            <button value = {'top'} onClick={HandleUpdate}>UP</button>
            <button value = {'bottom'} onClick={HandleUpdate}>DOWN</button>
        </div>


    );
}
