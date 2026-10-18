import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.amplitude.com/mcp",
  description: "Explore product analytics and user behavior.",
  auth: connect("mcp.amplitude.com/prj_6BX3AHRXhR6gaL6zKBPlMSgWA4Xe"),
});
