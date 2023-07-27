// styling
import {colors} from '@styles/vars';

// styled components
import {Header, Main, Footer} from './style';

// components
import Widget from '@components/Widget';
import {doctors} from '@db/doctors';
import Avatar from '@ui/Avatar';


let trineeStat = {};

const Trainer = ({data}) => {

    if (data) {
        let statobject = data;
        
        var stat = statobject.data.split(":")
        switch (stat[0]) {
            case "calories":
                trineeStat.calories = stat[1]
                break;
            case "heartRate":
                trineeStat.heartRate = stat[1]
                break;
        }
        trineeStat.traineeCode = statobject.traineeCode;
    }

    return (
        <Widget name="HeartRate" style={{height:190}}>
            <Main>  
                
                    <div className="innerpart-left">              
                        <Avatar avatar={doctors[0].avatar} alt="leviad" online={true} size={100} />
                        <div className="traineeName"><span> {trineeStat.traineeCode} </span></div>
                    </div>
                    <div className="innerpart-right">
                    <i className="icon icon-heart"></i>
                        <span className="text">{trineeStat.heartRate}</span>
                        <span className="titlesmall"> BPM</span>
                    </div>
                   
                    {/* <span className="text">{trineeStat.calories}</span>
                    <span className="titlesmall"> Cals</span> */}
                   
            </Main>           
        </Widget>
    )
}

export default Trainer;