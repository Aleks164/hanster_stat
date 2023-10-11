import Diagram from "@/components/Diagram/Diagram";
import {
  Col,
  DatePicker,
  DatePickerProps,
  Divider,
  Row,
  Spin,
  Typography,
} from "antd";
import dayjs from "dayjs";
import React from "react";
import { demoData } from "./demoData";

const { Text } = Typography;
const weekFormat = "MM/DD";
const customWeekStartEndFormat: DatePickerProps["format"] = (value) =>
  `${dayjs(value).startOf("week").format(weekFormat)} ~ ${dayjs(value)
    .endOf("week")
    .format(weekFormat)}`;

function Diagrams() {
  return (
    <Row style={{ width: "90vw", height: "80vh" }}>
      <Col flex={1} style={{ padding: 20 }}>
        <Text>Товар 1</Text>
        <DatePicker
          defaultValue={dayjs()}
          format={customWeekStartEndFormat}
          picker="week"
        />
        <Divider />
        <Text>Товар 2</Text>
        <DatePicker
          defaultValue={dayjs()}
          format={customWeekStartEndFormat}
          picker="week"
        />
        <Divider />
        <Text>Товар 3</Text>
        <DatePicker
          defaultValue={dayjs()}
          format={customWeekStartEndFormat}
          picker="week"
        />
      </Col>
      <Col flex={2} style={{ position: "relative" }}>
        <Diagram salesByDate={demoData} />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: " 0",
            display: " flex",
            alignItems: " center",
            justifyContent: " center",
            backgroundColor: "#ffffff6e",
          }}
        >
          <p style={{ marginRight: 15, fontSize: 24, fontFamily: "cursive" }}>
            В разработке...
          </p>
          <Spin size="large" />
        </div>
      </Col>
    </Row>
  );
}

export default Diagrams;
