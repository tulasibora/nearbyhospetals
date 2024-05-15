import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLegs, setSteps } from "../redux/action";
const RoutingFromHome = () => {
  const directions = useSelector((state) => state?.directions);
  const LegsData = useSelector((state) => state?.LegsData);
  const stepsData = useSelector((state) => state?.stepsData);

  const dispatch = useDispatch();
  // const [Legs, setLegs] = useState([]);
  // const [steps, setSteps] = useState([]);
  useEffect(() => {
    directions.map((direction) => {
      const legs = direction.properties.legs;
      dispatch(setLegs(legs));
    });
  }, [directions]);
  useEffect(() => {
    LegsData.map((leg) => {
      dispatch(setSteps(leg?.steps));
    });
  }, [LegsData]);
  return (
    <div>
      <div className="hospitalMaping">
        <Timeline>
          {stepsData.map((stepInstruction, index) => {
            return (
              <div className="timeDiv" key={index}>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    {stepInstruction.instruction.text}
                  </TimelineContent>
                </TimelineItem>{" "}
              </div>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};

export default RoutingFromHome;
