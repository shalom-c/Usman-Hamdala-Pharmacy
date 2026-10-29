import { config } from "../data/config";

export default function TopBar() {
  return (
    <div className="topbar">
      <p>{config.topBarHours} | {config.shortAddress} | Call {config.phone}</p>
    </div>
  );
}