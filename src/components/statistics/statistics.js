import React from 'react';
import MediaControlCard from './bar';
import Chart from './graphchart';

export default function Statics() {
  const Msgcards = [
    {title:"Message left",text:"Get Messages back",num:"524",classstyle:"green"},
    {title:"Total Doubt answered",text:"doubt ask 12",num:"2",classstyle:"yellow"},
    {title:"Students in your batch",text:"students left 471",num:"14",classstyle:"red"},
    {title:"Total Questions",text:"In 12 Quizes",num:"2",classstyle:"purple"},

]
  return (
    <React.Fragment>
        <div className="row ">
        <div className="col-sm-8 border-right">
            <div className="row">
              { Msgcards.map((card,i)=>{
                    return(
                        <div className="col-sm-6 mobile-card" key={i}>
                            <MediaControlCard CardData={card}/>
                        </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-12">
                  <div className="p-2 shadow mobile-card">
                    <Chart/>
                  </div>
                </div>
            </div>
        </div>
      </div>                    
      </React.Fragment>
    );
}