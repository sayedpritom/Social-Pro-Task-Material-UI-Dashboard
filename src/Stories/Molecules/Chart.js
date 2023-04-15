import React from "react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";

const data = [
  {
    "id": "$USD",
    "data": [
      {
        "x": "Progress",
        "y": 231
      },
      {
        "x": "Empty",
        "y": 126
      }
    ]
  }
  
]

const MyResponsiveRadialBar = ({ data /* see data tab */ }) => (
  <ResponsiveRadialBar
    data={data}
    valueFormat=" <+$.2g"
    startAngle={-90}
    endAngle={94}
    innerRadius={0.5}
    padding={0.1}
    cornerRadius={2}
    margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
    colors={['#1876F2', '#F0F2F5']}
    borderColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          '0.9'
        ]
      ]
    }}
    tracksColor="#ededed"
    enableRadialGrid={false}
    enableCircularGrid={false}
    radialAxisStart={null}
    radialAxisEnd={null}
    circularAxisOuter={null}
    labelsSkipAngle={0}
    labelsRadiusOffset={0}
    labelsTextColor={{ from: 'color', modifiers: [] }}
    animate={false}
    motionConfig={{
      mass: 1,
      tension: 1,
      friction: 1,
      clamp: false,
      precision: 0.01,
      velocity: 0
    }}
    transitionMode="middleAngle"
    legends={[]}
  />
)

export default function AppX() {
  return (
    <div style={{ height: 300, width: 400 }}>
      <MyResponsiveRadialBar data={data} />
    </div>
  );
}