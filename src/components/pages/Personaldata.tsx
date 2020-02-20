import * as React from 'react';
import './../../App.css';
import backImg from './../../assets/background.jpg';
import { SimpleCard } from './../molecules/Card';
import Template from './../templates';
import { withRouter, RouteComponentProps } from "react-router";
import { PersonalDataProps } from './PersonalDataList';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { fontStyle } from '@material-ui/system';

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
                  <img
                    style={{
                      width: "100%",
                      maxHeight: "200px",
                      objectFit: "contain"
                    }}
                    src={location.state.userData.image}
                  />
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
                    {location.state.userData.name}
                  </div>
                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    {"年齢："}
                    {location.state.userData.age}
                  </div>
                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    {"職業:"}：
                  {location.state.userData.job}
                  </div>
                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    {"住所:"}：
                  {location.state.userData.visit}
                  </div>
                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    {"詳細："}
                    {location.state.userData.description}
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
              location ?
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
                  data={location.state.userData.chartData}
                  style={{
                    backgroundColor: "white",
                  }}

                >
                  <PolarGrid />
                  <PolarAngleAxis
                    dataKey="rank"
                  />
                  <Radar
                    name={location.state.userData.chartData.rank}
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