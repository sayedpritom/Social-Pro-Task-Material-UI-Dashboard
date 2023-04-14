import React from "react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
const data = [
  {
    id: "JavaScript",
    data: [
      {
        x: 2000,
        y: 13
      },
      {
        x: 2001,
        y: 24
      },
      {
        x: 2002,
        y: 16
      },
      {
        x: 2003,
        y: 15
      },
      {
        x: 2004,
        y: 29
      },
      {
        x: 2005,
        y: 23
      }
    ]
  },
  {
    id: "ReasonML",
    data: [
      {
        x: 2000,
        y: 27
      },
      {
        x: 2001,
        y: 28
      },
      {
        x: 2002,
        y: 30
      },
      {
        x: 2003,
        y: 25
      },
      {
        x: 2004,
        y: 12
      },
      {
        x: 2005,
        y: 17
      }
    ]
  },
  {
    id: "TypeScript",
    data: [
      {
        x: 2000,
        y: 18
      },
      {
        x: 2001,
        y: 23
      },
      {
        x: 2002,
        y: 19
      },
      {
        x: 2003,
        y: 18
      },
      {
        x: 2004,
        y: 14
      },
      {
        x: 2005,
        y: 10
      }
    ]
  },
  {
    id: "Elm",
    data: [
      {
        x: 2000,
        y: 25
      },
      {
        x: 2001,
        y: 16
      },
      {
        x: 2002,
        y: 26
      },
      {
        x: 2003,
        y: 26
      },
      {
        x: 2004,
        y: 16
      },
      {
        x: 2005,
        y: 10
      }
    ]
  },
  {
    id: "CoffeeScript",
    data: [
      {
        x: 2000,
        y: 27
      },
      {
        x: 2001,
        y: 27
      },
      {
        x: 2002,
        y: 22
      },
      {
        x: 2003,
        y: 28
      },
      {
        x: 2004,
        y: 24
      },
      {
        x: 2005,
        y: 24
      }
    ]
  }
];
const MyResponsiveRadialBar = ({ data /* see data tab */ }) => (
    <ResponsiveRadialBar
        data={data}
        valueFormat=" <-#.21e"
        startAngle={90}
        endAngle={-90}
        innerRadius={0}
        padding={0.3}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        colors={{ scheme: 'red_blue' }}
        borderColor={{ theme: 'background' }}
        tracksColor="#f0f2f4"
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        label="value"
        labelsSkipAngle={14}
        labelsRadiusOffset={0.25}
        labelsTextColor="black"
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 48,
                translateY: 21,
                itemsSpacing: 6,
                itemDirection: 'right-to-left',
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)
export default function AppX() {
  return (
    <div style={{ height: 300, width: 400 }}>
      <MyResponsiveRadialBar data={data} />
    </div>
  );
}