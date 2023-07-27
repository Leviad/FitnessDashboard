// components
import Page from '@layout/Page';
import Trainer from '@widgets/Trainer';
import HeartRate from '@widgets/HeartRate';
import React, { useEffect,useState } from "react";
import { Amplify } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import * as subscriptions from "../graphql/subscriptions"; 

//AppSync endpoint settings
const myAppConfig = {
  aws_appsync_graphqlEndpoint:
    "https://fbvkc7tnzzdgfcrzjsxmeofo7a.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-west-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-454y4yp7lnaafdpwav2zof7zju",
};

Amplify.configure(myAppConfig);

let channel = "robots";
let data = "";

const DashboardE = () => {
    
    const [received, setReceived] = useState("");
    const [trainees, setTrainees] = useState({});
    const [trainData, settrainData] = useState({"lst":{}});
    
    useEffect(() => {
        //Subscribe via WebSockets
        const subscription = API.graphql(graphqlOperation(subscriptions.subscribe, { name: channel })).subscribe({next: ({ provider, value }) => {            
            let statobject = JSON.parse(value.data.subscribe.data);           
            setTrainees(statobject)
          },
          error: (error) => console.warn(error),
        });
        return () => subscription.unsubscribe();
      }, [channel]);
    

    // Set the train data
    if (trainees) {
      let obj = {...trainData.lst}
      
      if ('traineeCode' in trainees) {
        let key = trainees.traineeCode.toString()
        obj[key] = trainees
      }
      trainData.lst = obj
      console.log(trainData.lst)
    }

    return (
        <Page title="Active Trainers">
          {            
            Object.keys(trainData.lst).map((key) => {              
              return <div key={key}><Trainer data={trainData.lst[key]}/></div>
            })   
          }    
           
        </Page>
    );
}

export default DashboardE;