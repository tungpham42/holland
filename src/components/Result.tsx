import { HollandType, riasecDescriptions } from "../data/riasecDescriptions";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";

interface Props {
  scores: Record<string, number>;
}

export default function Result({ scores }: Props) {
  const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a);
  const chartData = Object.entries(scores).map(([key, value]) => ({
    key,
    label: riasecDescriptions[key as HollandType].name,
    value,
    fill: riasecDescriptions[key as HollandType].color,
  }));

  return (
    <div>
      <h4 className="mb-4">
        <FontAwesomeIcon icon={faChartBar} className="me-2" />
        Kết quả của bạn:
      </h4>
      {sorted.map(([key, score]) => {
        const desc = riasecDescriptions[key as HollandType];
        return (
          <Card key={key} className="mb-3 p-3">
            <h5 style={{ color: desc.color }} className="mb-2">
              {desc.name} ({key}): {score}
            </h5>
            <div className="text-muted" style={{ fontSize: "0.9em" }}>
              {desc.description}
            </div>
          </Card>
        );
      })}
      <Card className="p-3 mb-4">
        <p className="mb-0">
          Mã Holland của bạn:{" "}
          <strong className="text-primary">
            {sorted
              .slice(0, 3)
              .map(([k]) => k)
              .join("")}
          </strong>
        </p>
      </Card>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
