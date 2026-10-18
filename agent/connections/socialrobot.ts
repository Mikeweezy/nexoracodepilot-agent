import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://socialrobot.io/api/mcp",
  description: "Schedule, publish, and analyze social media posts.",
  auth: connect("socialrobot.io/prj_6BX3AHRXhR6gaL6zKBPlMSgWA4Xe"),
});
