import * as React from 'react';
import './../../App.css';
import Template from './../templates';
import { withRouter, RouteComponentProps } from "react-router";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';

interface Props extends RouteComponentProps {
}

class PersonalData extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const {
      location,
    } = this.props;
    const {
      userData: {
        image,
        name,
        age,
        job,
        visit,
        description,
        chartData,
      }
    } = location.state;
    return (
      <Template>
        <div
          style={{
            width: "calc(100vw - 16px)",
            height: "calc(100vh - 50px)",
            margin: 8,
            border: "1px solid white",
            borderRadius: 10,
          }}
        >
          {
            location ?
              <div>
                <div
                  style={{
                    border: "1px solid white",
                    padding: 4,
                    margin: 8,
                  }}
                >
                  {
                    !!image ?
                      <img
                        style={{
                          width: "100%",
                          maxHeight: "200px",
                          objectFit: "contain"
                        }}
                        src={image}
                        alt={'userImg'}
                      /> :
                      <div>{'NO DATA'}</div>
                  }

                </div>
                <div
                  style={{
                    paddingLeft: 16,
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    {"名前："}
                    {name}
                  </div>
                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    {"年齢："}
                    {age}
                  </div>
                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    {"職業:"}：
                  {job}
                  </div>
                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    {"住所:"}：
                  {visit}
                  </div>
                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    {"詳細："}
                    {description}
                  </div>
                </div>
              </div>
              :
              null
          }
          <div
            style={{
              textAlign: "center"
            }}
          >
            {
              chartData ?
                <div
                  style={{
                    display: "inline-block"
                  }}
                >
                  <RadarChart
                    height={300}
                    width={300}
                    cx="50%"
                    cy="50%"
                    data={chartData}
                    style={{
                      backgroundColor: "white",
                    }}

                  >
                    <PolarGrid />
                    <PolarAngleAxis
                      dataKey="rank"
                    />
                    <Radar
                      name={chartData.rank}
                      dataKey="value"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.6}
                    />
                    <Tooltip />
                  </RadarChart>
                </div>
                :
                null
            }
          </div>
        </div>
      </Template>
    );
  }
};

export default withRouter(PersonalData);