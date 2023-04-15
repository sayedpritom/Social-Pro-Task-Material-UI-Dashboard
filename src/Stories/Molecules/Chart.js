import React from "react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";

const MyResponsiveRadialBar = ({ data /* see data tab */ }) => (
  <ResponsiveRadialBar
    data={data}
    valueFormat=" <+$.2g"
    startAngle={-90}
    endAngle={94}
    innerRadius={0.6}
    padding={0.1}
    cornerRadius={2}
    margin={ {top: 40, bottom: -60, left: 35, right: 60} }
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

export default MyResponsiveRadialBar 